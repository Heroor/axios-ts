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
  params: '@:$, '
})
