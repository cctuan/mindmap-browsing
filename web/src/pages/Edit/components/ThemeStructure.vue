<template>
  <Sidebar ref="sidebar" :title="$t('themestructure.title')">
    <div class="themeList" :class="{ isDark: isDark }">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="$t('themestructure.structure')" name="structure">
          <div class="layoutList" :class="{ isDark: isDark }">
            <div
              class="layoutItem"
              v-for="item in layoutList"
              :key="item.value"
              @click="useLayout(item)"
              :class="{ active: item.value === layout }"
            >
              <div class="imgBox">
                <img :src="layoutImgMap[item.value]" alt="" />
              </div>
              <div class="name">{{ item.name }}</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          v-for="group in groupList"
          :key="group.name"
          :label="group.name"
          :name="group.name"
        ></el-tab-pane>
      </el-tabs>
      <div
        v-if="activeName !== 'structure'"
        class="themeItem"
        v-for="item in currentList"
        :key="item.value"
        @click="useTheme(item)"
        :class="{ active: item.value === theme }"
      >
        <div class="imgBox">
          <img :src="themeMap[item.value]" alt="" />
        </div>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </Sidebar>
</template>

<script>
import Sidebar from './Sidebar'
import { themeList, layoutList } from 'simple-mind-map/src/constants/constant'
import { storeConfig } from '@/api'
import { mapState, mapMutations } from 'vuex'
import { themeMap, layoutImgMap } from '@/config/constant.js'
import customThemeList from '@/customThemes'

export default {
  name: 'ThemeStructure',
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
      themeList: [...themeList, ...customThemeList].reverse(),
      layoutList,
      themeMap,
      layoutImgMap,
      theme: '',
      layout: '',
      activeName: '',
      groupList: []
    }
  },
  computed: {
    ...mapState({
      isDark: state => state.localConfig.isDark,
      activeSidebar: state => state.activeSidebar
    }),

    currentList() {
      return this.groupList.find(item => item.name === this.activeName).list
    }
  },
  watch: {
    activeSidebar(val) {
      if (val === 'theme') {
        this.theme = this.mindMap.getTheme()
        this.$refs.sidebar.show = true
      } else {
        this.$refs.sidebar.show = false
      }
    }
  },
  created() {
    this.initGroup()
    this.theme = this.mindMap.getTheme()
    this.mindMap.on('view_theme_change', this.handleViewThemeChange)
    this.layout = this.mindMap.getLayout()
  },
  beforeDestroy() {
    this.mindMap.off('view_theme_change', this.handleViewThemeChange)
  },
  methods: {
    ...mapMutations(['setLocalConfig']),

    handleViewThemeChange() {
      this.theme = this.mindMap.getTheme()
      this.handleDark()
    },

    initGroup() {
      let baiduThemes = [
        'default',
        'skyGreen',
        'classic2',
        'classic3',
        'classicGreen',
        'classicBlue',
        'blueSky',
        'brainImpairedPink',
        'earthYellow',
        'freshGreen',
        'freshRed',
        'romanticPurple',
        'pinkGrape',
        'mint'
      ]
      let baiduList = []
      let classicsList = []
      this.themeList.forEach(item => {
        if (baiduThemes.includes(item.value)) {
          baiduList.push(item)
        } else if (!item.dark) {
          classicsList.push(item)
        }
      })
      this.groupList = [
        {
          name: this.$t('themestructure.classics'),
          list: classicsList
        },
        {
          name: this.$t('themestructure.dark'),
          list: this.themeList.filter(item => item.dark)
        },
        {
          name: this.$t('themestructure.simple'),
          list: baiduList
        }
      ]
      this.activeName = this.groupList[0].name
    },

    useTheme(theme) {
      if (theme.value === this.theme) return
      this.theme = theme.value
      this.handleDark()
      const customThemeConfig = this.mindMap.getCustomThemeConfig()
      const hasCustomThemeConfig = Object.keys(customThemeConfig).length > 0
      if (hasCustomThemeConfig) {
        this.$confirm(this.$t('themestructure.coverTip'), this.$t('theme.tip'), {
          confirmButtonText: this.$t('themestructure.cover'),
          cancelButtonText: this.$t('themestructure.reserve'),
          type: 'warning',
          distinguishCancelAndClose: true,
          callback: action => {
            if (action === 'confirm') {
              this.mindMap.setThemeConfig({}, true)
              this.changeTheme(theme, {})
            } else if (action === 'cancel') {
              this.changeTheme(theme, customThemeConfig)
            }
          }
        })
      } else {
        this.changeTheme(theme, customThemeConfig)
      }
    },

    changeTheme(theme, config) {
      this.$bus.$emit('showLoading')
      this.mindMap.setTheme(theme.value)
      storeConfig({
        theme: {
          template: theme.value,
          config
        }
      })
    },

    handleDark() {
      let target = this.themeList.find(item => item.value === this.theme)
      this.setLocalConfig({
        isDark: target.dark
      })
    },

    useLayout(layout) {
      this.layout = layout.value
      this.mindMap.setLayout(layout.value)
      storeConfig({
        layout: layout.value
      })
    }
  }
}
</script>

<style lang="less" scoped>
.themeList {
  padding: 20px;
  padding-top: 0;

  &.isDark {
    .name {
      color: #fff;
    }
  }

  .themeItem,
  .layoutItem {
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 20px;
    padding-bottom: 20px;
    transition: all 0.2s;
    border: 1px solid transparent;

    &:last-of-type {
      border: none;
    }

    &:hover {
      box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
        0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
    }

    &.active {
      border: 1px solid #67c23a;
    }

    .imgBox {
      width: 100%;

      img {
        width: 100%;
      }
    }
    .name {
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
