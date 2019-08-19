import request from './request'
import axios from 'axios'

const userInfo = {
  userList(params: any) {
    return axios.get('dashboard/users', {
      params: params
    })
  },
  userDetail(params: any) {
    return axios.post('user/info', params)
  }
}

export default userInfo
