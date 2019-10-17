module.exports = function extend (router) {
  router.get('/extend/get', (req, res) => {
    res.json(req.query)
  })

  router.post('/extend/post', (req, res) => {
    res.json(req.body)
  })

  router.get('/extend/user', (req, res) => {
    res.json({
      code: 0,
      result: {
        name: 'tom',
        age: 12
      },
      message: 'ok'
    })
  })
}
