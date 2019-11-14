module.exports = function upload (router) {
  router.get('/upload/get', (req, res) => {
    res.end('upload success')
  })
  router.post('/upload/post', (req, res) => {
    console.log(req.body, req.files)
    res.end('upload success')
  })
}
