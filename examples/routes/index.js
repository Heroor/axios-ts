const simple = require('./simple')
const base = require('./base')
const error = require('./error')
const extend = require('./extend')
const interceptor = require('./interceptor')
const config = require('./config')
const cancel = require('./cancel')

module.exports = [
  simple,
  base,
  error,
  extend,
  interceptor,
  config,
  cancel,
]
