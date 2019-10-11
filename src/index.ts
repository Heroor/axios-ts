import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { BuildURL } from './helpers/url'
import transformRequest from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  return xhr(config)
}

function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig) {
  const { params, url } = config
  return BuildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig) {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios
