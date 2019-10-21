import axios, { AxiosTransformer } from '../../src/index'
import qs from 'qs'

// 修改默认headers
axios.defaults.headers.common['test2'] = 'test2'
axios({
  url: '/config/post',
  method: 'post',
  data: qs.stringify({
    msg: 'test header',
  }),
  headers: {
    test1: '123'
  }
})
  .then(console.log)
  .catch(console.error)

// 处理函数
axios({
  transformRequest: [
    function (data) {
      return qs.stringify(data)
    },
    ...(axios.defaults.transformRequest as AxiosTransformer[]),
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    function (data) {
      if (typeof data === 'object') {
        data.age = 100
      }
      return data
    }
  ],
  url: '/config/post',
  method: 'post',
  data: {
    name: 'jerry'
  }
})
  .then(console.log)
  .catch(console.error)

// 创建实例
const instance = axios.create({
  transformRequest: [
    function (data) {
      return qs.stringify(data)
    },
    ...(axios.defaults.transformRequest as AxiosTransformer[]),
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    function (data) {
      if (typeof data === 'object') {
        data.age = 100
      }
      return data
    }
  ],
})

instance({
  url: '/config/post',
  method: 'post',
  data: {
    name: 'jerry'
  }
})
  .then(console.log)
  .catch(console.error)
