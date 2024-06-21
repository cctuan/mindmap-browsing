const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const isLibrary = process.env.NODE_ENV === 'library'

const WebpackDynamicPublicPathPlugin = require('webpack-dynamic-public-path')

module.exports = {
  publicPath: isDev ? '' : './dist',
  outputDir: '../dist',
  lintOnSave: false,
  productionSourceMap: false,
  filenameHashing: false,
  transpileDependencies: [
    'yjs',
    'lib0',
    'zod-to-json-schema',
    '@langchain',
    'langsmith',
    'openai'
  ],
  chainWebpack: config => {
    // 移除 preload 插件
    config.plugins.delete('preload')
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 支持运行时设置public path
    if (!isDev) {
      config
        .plugin('dynamicPublicPathPlugin')
        .use(WebpackDynamicPublicPathPlugin, [
          { externalPublicPath: 'window.externalPublicPath' }
        ])
    }
    // 给插入html页面内的js和css添加hash参数
    if (!isLibrary) {
      config.plugin('html').tap(args => {
        args[0].hash = true
        return args
      })
    }
    config.module.rule('babel').test(/\.cjs$/).use('babel').loader('babel-loader').options({
      presets: [['@babel/preset-env', { modules: false }]],
      plugins: ['@babel/plugin-proposal-class-properties']
    })
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/')
      }
    }
  }
}
