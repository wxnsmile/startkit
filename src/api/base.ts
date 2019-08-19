// 接口域名管理
const env = process.env.NODE_ENV
let baseUrl = ''
switch (env) {
  case 'test': // dev_test
    baseUrl = 'http://a.com'
    break
  case 'prod': // dev_prod
    baseUrl = 'http://b.com'
    break
  case 'development': // dev
    baseUrl = 'http://tradex-api-staging.zeno-dev.com/api/v2/admin'
    break
  default:
    // 'production'
    baseUrl = 'http://d.com'
}

export default baseUrl
