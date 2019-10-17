module.exports = function simple(router) {
  router.get('/simple/get', (req, res) => {
    res.json(req.query)
  })
}
