export function isArrayEmpty(arr: any) {
  return !Array.isArray(arr) || arr.length === 0
}
export const isProduction = () => import.meta.env.PROD
export const isDevlopment = () => import.meta.env.DEV

export function isBrowser() {
  return (
    typeof window !== 'undefined' &&
    !!window.document &&
    !!window.document.createElement
  )
}

export function hasChinese(str: string) {
  return /.*[\u4e00-\u9fa5]+.*$/.test(str)
}

export function addLeadingSlash(url: string) {
  return url.charAt(0) === '/' || url.startsWith('https') ? url : '/' + url
}

export function normalizeUrl(url?: string) {
  if (!url) {
    return '/'
  }

  if (url.startsWith('http')) {
    return url
  }

  // 如果是开发环境，则主动编码
  if (isDevlopment()) {
    return encodeURI(url)
  }

  let suffix = '.html'

  // 兼容文件夹下index
  if (url.endsWith('/')) {
    suffix = 'index' + suffix
  }

  let prodUrl = ''

  const addSuffix = (url: string, suffix: string) =>
    url.includes(suffix) ? url : url + suffix

  // 兼容查询参数
  if (url.includes('?')) {
    const [pureUrl, search] = url.split('?')

    prodUrl =
      addSuffix(addLeadingSlash(encodeURI(pureUrl)), suffix) + '?' + search
  } else {
    prodUrl = addSuffix(addLeadingSlash(encodeURI(url)), suffix)
  }

  return prodUrl
}

export const normalizeTitle = (path: string) => path?.replace(/^(\d+)/, '')

export function devLog(message?: any, ...optionalParams: any[]) {
  if (isDevlopment()) {
    console.log(message, ...optionalParams)
  }
}
