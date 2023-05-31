export function isArrayEmpty(arr: any) {
  return !Array.isArray(arr) || arr.length === 0
}

export function isBrowser() {
  return (
    typeof window !== 'undefined' &&
    !!window.document &&
    !!window.document.createElement
  )
}
