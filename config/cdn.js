const CDN_HOST =
  (process.env.deploy_host && process.env.deploy_host.replace(/\/+$/, '')) || ''
const CDN_PATH = CDN_HOST.replace(/^(https?:\/\/[^\\/]+).*$/, '$1')
const CDN_PATH_COMMON = `${CDN_HOST}/static/common`
module.exports = {
  css: [
    `${CDN_PATH}/vendor/css/ali-international/ali-international.css`,
    `${CDN_PATH_COMMON}/element-ui/2.8.2/lib/theme-chalk/index.css`,
    `${CDN_PATH_COMMON}/v-charts/1.19.0/style.min.css`
  ],
  js: [
    `${CDN_PATH_COMMON}/vue/2.5.17/vue.min.js`,
    `${CDN_PATH_COMMON}/element-ui/2.8.2/lib/index.js`,
    `${CDN_PATH_COMMON}/v-charts/1.19.0/echarts.4.2.0.min.js`,
    `${CDN_PATH_COMMON}/v-charts/1.19.0/index.min.js`
  ]
}
