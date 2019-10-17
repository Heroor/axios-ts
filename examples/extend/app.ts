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

axios('/extend/get', {
  params: {
    a: 1,
    b: 2
  }
})

axios('/extend/post', {
  method: 'post',
  data: {
    a: 1,
    b: 2
  }
})

interface ResposeData<T = any> {
  code: number
  result: T
  message: string
}

interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios<ResposeData<T>>('/extend/user')
    .then(res => res.data)
    .catch(console.error)
}

async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user.result.name)
    console.log(user.result.age)
    console.log(user.message)
    console.log(user.code)
  }
}

test()
  .catch(console.error)
