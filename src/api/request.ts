import axios from 'axios'
import router from '../router'
import baseUrl from './base'

const api = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
api.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
api.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  function(error) {
    if (error) {
      errorHandle(error.status, error.data.message)
      return Promise.reject(error)
    } else {
      // 处理断网的情况
      if (!window.navigator.onLine) {
        // store.commit('changeNetwork', false)
      } else {
        return Promise.reject(error)
      }
    }
  }
)

const errorHandle = (status: number, other: any) => {
  switch (status) {
    case 401: // 未登录
      break
    case 403: // 登录过期
      break
    case 404: // 请求不存在
      break
    default:
    // 其他错误
  }
}
export default api

// export function get(url: string, params: any) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, { params })
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err.data)
//       })
//   })
// }

// export function post(url: string, params: any) {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(url, params)
//       .then(res => {
//         resolve(res.data)
//       })
//       .catch(err => {
//         reject(err.data)
//       })
//   })
// }
