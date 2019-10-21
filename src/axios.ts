import { AxiosInstance, AxiosRequestConfig } from "./types"
import Axios from './core/Axios'
import { extend } from "./helpers/util"
import defaults from "./core/defaults"

function createInstance (defaultConfig: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(defaultConfig)
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)
  return instance as AxiosInstance
}

const axios = createInstance(defaults)

export default axios
