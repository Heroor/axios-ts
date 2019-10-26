module.exports = function cancel (router) {
  router.get('/cancel/get', (req, res) => {
    setTimeout(() => {
      res.json(req.query)
    }, 1000)
  })
  router.post('/cancel/post', (req, res) => {
    setTimeout(() => {
      res.json(req.body)
    }, 1000)
  })
}
