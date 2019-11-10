module.exports = function more(router) {
  router.get('/more/get', (req, res) => {
    res.json(req.cookies)
  })

  router.get('/more/xsrf', (req, res) => {
    res.json(req.cookies)
  })

}
