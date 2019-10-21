import { AxiosInstance, AxiosRequestConfig, AxiosStatic } from "./types"
import Axios from './core/Axios'
import { extend } from "./helpers/util"
import defaults from "./core/defaults"
import mergeConfig from "./core/mergeConfig"

function createInstance (defaultConfig: AxiosRequestConfig): AxiosStatic {
  const context = new Axios(defaultConfig)
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)
  return instance as AxiosStatic
}

const axios = createInstance(defaults)
axios.create = function create (config) {
  return createInstance(mergeConfig(defaults, config))
}

export default axios
