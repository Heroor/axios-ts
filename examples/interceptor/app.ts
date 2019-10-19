import axios from '../../src/index'

axios.interceptors.request.use((config) => {
  console.log('interceptors-request-1: ', config)
  config.params.age = 10
  return config
})

axios.interceptors.request.use((config) => {
  console.log('interceptors-request-2: ', config)
  config.params.name = 'tom'
  return config
})

axios.interceptors.response.use((res) => {
  console.log('interceptors-response-1: ', res)
  res.data.age = 12
  return res
})

const interceptorsResponse2 = axios.interceptors.response.use((res) => {
  console.log('interceptors-response-2: ', res)
  res.data.name = 'jerry'
  return res
})

console.log(interceptorsResponse2)
axios.interceptors.response.eject(interceptorsResponse2)

axios({
  url: '/interceptor/get',
  params: {
    age: 1,
  }
})
.then(res => {
  console.log('result: ', res.data)
})
.catch(console.error)
