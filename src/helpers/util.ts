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

export function extend<T, U> (to: T, from: U): T & U {
  for (const key in from) {
    (to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)
  objs.forEach(obj => {
    if (obj) {
      for (const key in obj) {
        const val = obj[key]
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge(val)
          }
        } else {
          result[key] = val
        }
      }
    }
  })
  return result
}
