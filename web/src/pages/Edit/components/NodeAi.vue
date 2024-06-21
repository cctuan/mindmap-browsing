<template>
  <el-dialog
    class="nodeAIDialog"
    :title="$t('nodeAI.title')"
    :visible.sync="dialogVisible"
    :width="isMobile ? '90%' : '50%'"
    :top="isMobile ? '20px' : '15vh'"
  >
    <div class="title">選擇AI工具</div>
    <el-autocomplete
      v-model="searchQuery"
      @keydown.native.stop
      :fetch-suggestions="querySearchAsync"
      placeholder="搜索AI工具"
      @select="handleSelect"
      style="width: 100%; margin-bottom: 12px;"
    ></el-autocomplete>
    <div v-if="selectedTool" class="toolPreview">
      <div class="title">工具預覽</div>
      <div v-html="toolPreview"></div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">{{ $t('dialog.cancel') }}</el-button>
      <el-button type="primary" @click="confirm">{{ $t('dialog.confirm') }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { isMobile } from 'simple-mind-map/src/utils/index'
import debounce from 'lodash/debounce';

export default {
  name: 'NodeAI',
  data() {
    return {
      dialogVisible: false,
      selectedTool: null,
      searchQuery: '',
      activeNodes: null,
      isMobile: isMobile(),
      prompts: [],
      expandedIndex: null
    }
  },
  computed: {
    toolPreview() {
      const tool = this.prompts[this.expandedIndex];
      return tool ? `${tool.description}<br><br>${tool.content}` : '';
    }
  },
  watch: {
    searchQuery: debounce(function(newQuery) {
      this.searchTools(newQuery);
    }, 500),
    activeSidebar(val) {
      if (val === 'ai') {
        this.refresh();
        this.$refs.sidebar.show = true;
      } else {
        this.$refs.sidebar.show = false;
      }
    }
  },
  created() {
    this.$bus.$on('node_active', this.handleNodeActive);
    this.$bus.$on('showNodeAI', this.handleShowNodeAI);
  },
  beforeDestroy() {
    this.$bus.$off('node_active', this.handleNodeActive);
    this.$bus.$off('showNodeAI', this.handleShowNodeAI);
  },
  methods: {
    handleNodeActive(...args) {
      console.log('handleNodeActive')
      console.log(...args)
      this.activeNodes = [...args[1]];
      this.refresh();
    },

    handleShowNodeAI() {
      this.reset();
      this.dialogVisible = true;
    },

    cancel() {
      this.dialogVisible = false;
      this.reset();
    },

    reset() {
      this.selectedTool = null;
      this.searchQuery = '';
      this.expandedIndex = null;
    },

    confirm() {
      // 根据具体需求调用相应的方法
      if (this.selectedTool === null) {
        this.cancel()
        return;
      }
      try {
        let firstNode = this.activeNodes[0]
        let mindMap = firstNode.mindMap
        console.log(this.selectedTool)
        mindMap.execCommand('INSERT_AI_CHILD_NODE', firstNode, this.selectedTool.content);
      } catch (e) {
        console.error(e)
      }
      this.cancel();
    },

    querySearchAsync(queryString, cb) {
      const results = queryString ? this.prompts.filter(this.createFilter(queryString)) : this.prompts;
      cb(results.map(prompt => {
        return {
          value: prompt.title,
          title: prompt.title,
          content: prompt.content
        };
      }));
    },

    createFilter(queryString) {
      return (prompt) => {
        return prompt.title.toLowerCase().includes(queryString.toLowerCase()) ||
               prompt.description.toLowerCase().includes(queryString.toLowerCase());
      };
    },

    handleSelect(item) {
      this.selectedTool = item;
      this.expandedIndex = this.prompts.findIndex(prompt => prompt.title === item.title);
    },

    searchTools(query) {
      console.log(`搜索: ${query}`);
    },

    refresh() {
      if (!this.activeNodes[0]) {
        return;
      }
      try {
        let firstNode = this.activeNodes[0]
        let data = firstNode.mindMap.getConfig('aiPrompts');
        this.prompts = data || [];
      } catch (e) {
        console.error(e);
        this.prompts = [];
      }
    }
  }
}
</script>

<style lang="less" scoped>
.nodeAIDialog {
  .title {
    font-size: 18px;
    margin-bottom: 12px;
  }

  .inputBox {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .label {
      width: 150px;
    }
  }
  
  .toolPreview {
    margin-bottom: 12px;
    .title {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
}
</style>
