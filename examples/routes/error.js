module.exports = function error (router) {
  router.get('/error/get', (req, res) => {
    if (Math.random() > 0.5) {
      res.json({
        msg: 'success!'
      })
    } else {
      res.status(500)
      res.end()
    }
  })

  router.get('/error/timeout', (req, res) => {
    setTimeout(() => {
      res.json({
        msg: 'success!'
      })
    }, 3000)
  })
}
