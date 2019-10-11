import axios from '../../src/index'

axios({
  method: 'get',
  url: '/base/get',
  params: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: [1, 2]
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    a: [1, 2],
    b: { name: 'tom', age: 12 },
    c: new Date()
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    key: '@:$, '
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    key: null,
    name: 'tom'
  }
})

axios({
  method: 'get',
  url: '/base/get#hash',
  params: {
    name: 'tom'
  }
})

axios({
  method: 'get',
  url: '/base/get?a=1',
  params: {
    name: 'tom'
  }
})

axios({
  method: 'get',
  url: '/base/get?a=1&b=2',
  params: {
    name: 'tom'
  }
})

axios({
  method: 'get',
  url: '/base/get#hash?a=1',
  params: {
    name: 'tom'
  }
})

axios({
  method: 'get',
  url: '/base/get#hash?a=1&b=2',
  params: {
    name: 'tom'
  }
})

// ----------------------------------------------------- //

axios({
  method: 'post',
  url: '/base/post',
  data: {
    name: 'tom',
    age: 12
  }
}).then(res => {
  console.log('res: ', res)
}).catch(console.error)

axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    name: 'tom',
    age: 12
  }
}).then(res => {
  console.log('res: ', res)
}).catch(console.error)

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json, text/plain, */*'
  },
  data: {
    name: 'tom',
    age: 12
  }
})

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

axios({
  method: 'post',
  url: '/base/post',
  data: searchParams
})

const arr = new Int32Array([21, 31])
axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
})
