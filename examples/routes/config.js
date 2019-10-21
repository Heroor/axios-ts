module.exports = function config (router) {
  router.get('/config/get', (req, res) => {
    res.json(req.query)
  })
  router.post('/config/post', (req, res) => {
    res.json(req.body)
  })
}
