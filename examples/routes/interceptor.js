module.exports = function interceptor (router) {
  router.get('/interceptor/get', (req, res) => {
    res.json(req.query)
  })
}
