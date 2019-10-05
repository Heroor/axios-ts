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
    b: {name: 'tom', age: 12},
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
