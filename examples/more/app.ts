import axios from '../../src/index'

document.cookie = 'a=b'

axios.get('/more/get').then(res => {
  console.log(res)
})

axios.post('http://127.0.0.1:8088/more/server2', {}, {
  withCredentials: true
}).then(console.log)


const instance = axios.create({
  xsrfCookieName: 'XSRF-TOKEN-D',
  xsrfHeaderName: 'X-XSRF-TOKEN-D'
})

instance.get('/more/xsrf').then(res => {
  console.log(res)
})

axios.post('/more/post', {
  a: 123
}, {
  auth: {
    username: 'tom',
    password: '123qwe'
  }
}).then(res => {
  console.log(res)
})

axios.post('/more/post', {
  a: 123
}, {
  auth: {
    username: 'jerry',
    password: '123qwe'
  }
}).then(res => {
  console.log(res)
})
