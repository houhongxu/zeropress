export function isBrowser() {
  return (
    typeof window !== 'undefined' &&
    !!window.document &&
    !!window.document.createElement
  )
}

/**
 * utf8转码url
 * @description 兼容中文url
 */
export function normalizeUrl(url = '/') {
  return encodeURI(url)
}

/**
 * url添加html后缀
 * @description 兼容服务器ssg，访问index.html之外的html需要后缀
 */
export function urlWithHtml(url: string) {
  return url ? url + '.html' : url
}

export function groupBy<T>(arr: T[], key: keyof T) {
  return arr.reduce<Record<string, T[]>>((pre, cur) => {
    const valueAsKey = cur[key] as string | number

    if (!pre[valueAsKey]) {
      pre[valueAsKey] = []
    }

    pre[valueAsKey].push(cur)

    return pre
  }, {})
}

export function keyBy<T>(arr: T[], key: keyof T) {
  return arr.reduce<Record<string, T>>((pre, cur) => {
    const valueAsKey = cur[key] as string | number

    pre[valueAsKey] = cur

    return pre
  }, {})
}
