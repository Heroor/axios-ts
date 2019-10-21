const simple = require('./simple')
const base = require('./base')
const error = require('./error')
const extend = require('./extend')
const interceptor = require('./interceptor')
const config = require('./config')

module.exports = [
  simple,
  base,
  error,
  extend,
  interceptor,
  config,
]
