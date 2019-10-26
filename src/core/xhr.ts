import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { parseHeaders } from '../helpers/headers'
import { createError } from '../helpers/error'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout, cancleToken } = config
    const request = new XMLHttpRequest()

    // 设置response的type 处理json等数据类型
    if (responseType) {
      request.responseType = responseType
    }
    if (timeout) {
      request.timeout = timeout
    }
    request.open(method.toUpperCase(), url!, true)
    request.onreadystatechange = function handleLoad () {
      if (request.readyState !== 4) {
        return
      }
      if (request.status === 0) {
        return
      }

      const reponseHeaders = parseHeaders(request.getAllResponseHeaders())

      const responseData = responseType !== 'text'
        ? request.response
        : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: reponseHeaders,
        config,
        request
      }
      handleResponse(response)
    }
    request.onerror = function handleError () {
      reject(createError('Network Error', config, null, request))
    }
    request.ontimeout = function handleTimeout () {
      reject(createError(`Timeout of ${timeout} ms exceeded`, config, 'ECONNABORTED', request))
    }
    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    if (cancleToken) {
      cancleToken.promise.then(reason => {
        request.abort()
        reject(reason)
      })
    }
    request.send(data)

    function handleResponse (response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response )
      } else {
        reject(createError(
          `Request failed with status code ${response.status}`,
          config,
          null,
          request,
          response
        ))
      }
    }
  })
}
