const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
// const InlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
  publicPath: '',
  devServer: {
    contentBase: './dist',
    proxy: {
      '/api': {
        target: 'https://tradex-api-staging.zeno-dev.com/',
        secure: false // 接受https请求
      }
    }
  },
  configureWebpack: config => {
    // config.externals = {
    //   vue: 'Vue',
    //   'element-ui': 'ELEMENT',
    //   'vue-router': 'VueRouter',
    //   vuex: 'Vuex',
    //   axios: 'axios'
    // }
    if (config.mode === 'production') {
      // 为生产环境修改配置...
      const plugins = []
      plugins
        .push
        // new UglifyJsPlugin({
        //   uglifyOptions: {
        //     compress: {
        //       warnings: false,
        //       drop_console: true,
        //       drop_debugger: false,
        //       pure_funcs: ['console.log'] //移除console
        //     }
        //   },
        //   sourceMap: false,
        //   parallel: true
        // })
        ()
      config.plugins = [...config.plugins, ...plugins]
    } else {
      // 为开发环境修改配置...
      config.plugins.push(
        new CleanWebpackPlugin()
        //new BundleAnalyzerPlugin()
      )
    }
  }
}
