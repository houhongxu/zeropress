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

export function normalizeHref(url?: string) {
  if (!url) {
    return '/'
  }

  if (!isProduction() || url.startsWith('http')) {
    return url
  }

  let suffix = '.html'

  const normalUrl = addLeadingSlash(`${url}${suffix}`)
  console.log(normalUrl, encodeURI(normalUrl))

  return encodeURI(normalUrl)
}

export function addLeadingSlash(url: string) {
  return url.charAt(0) === '/' || url.startsWith('https') ? url : '/' + url
}
