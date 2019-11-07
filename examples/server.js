const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

require('./server2')

const app = express()
const complier = webpack(WebpackConfig)

app.use(webpackDevMiddleware(complier, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false,
  }
}))

app.use(webpackHotMiddleware(complier))
app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cookieParser())

const router = express.Router()
routes.forEach(genRouteFn => genRouteFn(router))
app.use(router)

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
