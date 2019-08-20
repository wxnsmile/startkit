const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CdnConfig = require('./config/cdn')

const env = process.env.NODE_ENV
console.log('deploy_host:', process.env.deploy_host)
console.log('process.env.api_root:', process.env.api_root)

module.exports = {
  // index: 'index.html', //indexPath = index 模板
  // outputDir: 'dist', // outputDir = assetRoot 打包后文件要存放的路径
  // publicPath: '/', // publicPath = assetsPublicPath 代表打包后，index.html里面引用资源的的相对地址
  assetsDir: 'static', // assetsDir=assetsSubDirectory 除了 index.html 之外的静态资源要存放的路径，
  publicPath:
    env === 'production'
      ? (process.env.deploy_host &&
          process.env.deploy_host.replace(/\/+$/, '')) ||
        ''
      : '',
  devServer: {
    contentBase: './dist',
    proxy: {
      '/api': {
        target: 'https://tradex-api-staging.zeno-dev.com/',
        secure: false // 接受https请求
      }
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.externals({
        vue: 'Vue',
        'element-ui': 'Element',
        'vue-router': 'VueRouter',
        // vuex: 'Vuex',
        axios: 'axios'
      })
    } else {
      // 为开发环境修改配置...
    }
  },
  configureWebpack: config => {
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, './static'),
          to: 'static',
          ignore: ['.*']
        }
      ])
    )
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.plugins.push(
        new HtmlWebpackPlugin({
          template: 'index.html',
          filename: 'index.html',
          inject: true,
          CDN: CdnConfig,
          env: env,
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
          }
        })
      )
    } else {
      // 为开发环境修改配置...
    }
  }
  // configureWebpack: {
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       template: 'index.html',
  //       filename: 'index.html',
  //       inject: true,
  //       CDN: CdnConfig,
  //       env: env,
  //       minify: {
  //         removeComments: true,
  //         collapseWhitespace: true,
  //         removeAttributeQuotes: true
  //       }
  //     })
  //   ]
  // }
}
