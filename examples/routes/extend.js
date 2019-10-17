module.exports = function extend (router) {
  router.get('/extend/get', (req, res) => {
    res.json(req.query)
  })

  router.post('/extend/post', (req, res) => {
    res.json(req.body)
  })
}
