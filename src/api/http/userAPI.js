import { post,get } from './commonAPI.js'
// mock数据直接调用axios
import axios from 'axios'

const qs = require('qs')
// const baseUrl = 'https://5dd3847e6625890014a6e6ae.mockapi.io/api/vue3/'
const baseUrl = '/'

let userAPI = {
  //保存或修改报表分组
  login(param, succeFunction, failFunction) {
    post('/user/login', param)
      .then(resp => {
          console.log(resp)
        if (resp.status == '200') {
          succeFunction(resp.content)
        } else if (resp.code == '500') {
          failFunction(resp)
        }
      })
      .catch(err => {
        err
      })
  },

}

export default userAPI
