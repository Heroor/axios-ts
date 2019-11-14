const atob = require('atob')

module.exports = function more(router) {
  router.get('/more/get', (req, res) => {
    res.json(req.cookies)
  })

  router.get('/more/xsrf', (req, res) => {
    res.json(req.cookies)
  })

  router.post('/more/post', (req, res) => {
    const auth = req.headers.authorization
    const [type, credentials] = auth.split(' ')
    console.log(atob(credentials))
    const [username, password] = atob(credentials).split(':')
    if (type === 'Basic' && username === 'tom' && password === '123qwe') {
      res.json(req.body)
    } else {
      res.status(401)
      res.end('UnAuthorization')
    }
  })

}
