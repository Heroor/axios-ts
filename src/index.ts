import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { BuildURL } from './helpers/url'

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config)
}

function transformUrl(config: AxiosRequestConfig) {
  const { params, url } = config
  return BuildURL(url, params)
}

export default axios
