<template>
  <Sidebar ref="sidebar" :title="$t('aiTool.title')">
    <div class="aiTool" :class="{ isDark: isDark }">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="Prompt" name="promptManager">
          <div class="inputGroup">
            <label>Prompt Title</label>
            <el-input v-model="newPromptTitle" placeholder="Enter prompt title" @keyup.enter="addPrompt" @keydown.native.stop></el-input>
          </div>
          <div class="inputGroup">
            <label>Prompt Description</label>
            <el-input type="textarea" v-model="newPromptDescription" placeholder="Enter prompt description" @keyup.enter="addPrompt" @keydown.native.stop></el-input>
          </div>
          <div class="inputGroup">
            <label>Prompt Content</label>
            <el-input type="textarea" v-model="newPromptContent" placeholder="Enter prompt content" @keyup.enter="addPrompt" @keydown.native.stop></el-input>
          </div>
          <el-button @click="addPrompt">Add Prompt</el-button>
          <el-table :data="prompts" style="width: 100%">
            <el-table-column prop="title" label="Title">
              <template v-slot="scope">
                <el-button type="text" @click="toggleDetails(scope.$index)">{{ scope.row.title }}</el-button>
              </template>
            </el-table-column>
            <el-table-column label="Actions" width="100">
              <template v-slot="scope">
                <el-button @click="deletePrompt(scope.$index)" type="danger">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div v-if="expandedIndex !== null" class="promptDetails">
            <div class="detailTitle">Edit Prompt Details</div>
            <div class="inputGroup">
              <label>Prompt Title</label>
              <el-input v-model="prompts[expandedIndex].title" placeholder="Enter prompt title" @keydown.native.stop></el-input>
            </div>
            <div class="inputGroup">
              <label>Prompt Description</label>
              <el-input type="textarea" v-model="prompts[expandedIndex].description" placeholder="Enter prompt description" @keydown.native.stop></el-input>
            </div>
            <div class="inputGroup">
              <label>Prompt Content</label>
              <el-input type="textarea" v-model="prompts[expandedIndex].content" placeholder="Enter prompt content" @keydown.native.stop></el-input>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Config" name="generalConfig">
          <div class="generalConfig">
            <div class="inputGroup">
              <label>OpenAI API Key</label>
              <el-input v-model="openaiApiKey" placeholder="Enter OpenAI API Key" @keydown.native.stop></el-input>
            </div>
            <el-button @click="saveApiKey">Save API Key</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </Sidebar>
</template>

<script>
import Sidebar from './Sidebar'
import { mapState, mapMutations } from 'vuex'
import { storeConfig } from '@/api'

export default {
  name: 'AiTool',
  components: {
    Sidebar
  },
  props: {
    mindMap: {
      type: Object
    }
  },
  data() {
    return {
      activeTab: 'promptManager',
      newPromptTitle: '',
      newPromptDescription: '',
      newPromptContent: '',
      prompts: [],
      expandedIndex: null,
      openaiApiKey: ''
    }
  },
  computed: {
    ...mapState({
      isDark: state => state.localConfig.isDark,
      activeSidebar: state => state.activeSidebar
    })
  },
  watch: {
    activeSidebar(val) {
      if (val === 'ai') {
        this.reflesh()
        this.$refs.sidebar.show = true
      } else {
        this.$refs.sidebar.show = false
      }
    }
  },
  methods: {
    ...mapMutations(['setLocalConfig']),
    reflesh() {
      let data = this.mindMap.getConfig('aiPrompts')
      try {
        this.prompts = data || []
      } catch (e) {
        console.error(e)
        this.prompts = []
      }
      this.openaiApiKey = this.mindMap.getConfig('openaiApiKey')
    },
    addPrompt() {
      if (this.newPromptTitle.trim() !== '' && this.newPromptContent.trim() !== '') {
        this.prompts.push({
          title: this.newPromptTitle.trim(),
          description: this.newPromptDescription.trim(),
          content: this.newPromptContent.trim()
        })
        this.newPromptTitle = ''
        this.newPromptDescription = ''
        this.newPromptContent = ''
        storeConfig({
          config: {
            'aiPrompts': this.prompts,
            'openaiApiKey': this.openaiApiKey
          }
        })
      }
    },
    deletePrompt(index) {
      this.prompts.splice(index, 1)
      storeConfig({
        config: {
          'aiPrompts': this.prompts,
          'openaiApiKey': this.openaiApiKey
        }
      })
    },
    toggleDetails(index) {
      this.expandedIndex = this.expandedIndex === index ? null : index
    },
    saveApiKey() {
      storeConfig({
        config: {
          'aiPrompts': this.prompts,
          'openaiApiKey': this.openaiApiKey
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.aiTool {
  padding: 20px;
  padding-top: 0;

  .el-table {
    margin-top: 20px;
  }

  .promptDetails {
    margin-top: 20px;
    .detailTitle {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  .inputGroup {
    margin-bottom: 20px;
  }

  .inputGroup label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
}

.generalConfig {
  padding: 20px;

  .el-input {
    margin-bottom: 20px;
  }

  .inputGroup {
    margin-bottom: 20px;
  }

  .inputGroup label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
}
</style>
