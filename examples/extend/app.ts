import axios from '../../src/index'
axios({
  method: 'get',
  url: '/extend/get',
  params: {
    a: 1,
    b: 2
  }
})
axios.get('/extend/get', {
  params: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'post',
  url: '/extend/post',
  data: {
    a: 1,
    b: 2
  }
})

axios.post('/extend/post', {
  a: 1,
  b: 2
})
