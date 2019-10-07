function unCurry(fn: any) {
  return function(...args: any) {
    return fn.call(...args)
  }
}

const toString = unCurry(Object.prototype.toString)

export function isDate(value: any): value is Date {
  return toString(value) === '[object Date]'
}
export function isObject(value: any): value is Object {
  return value !== null && typeof value === 'object'
}
export function isPlainObject(value: any): value is Object {
  return toString(value) === '[object Object]'
}
