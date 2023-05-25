const APPEARANCE_KEY = 'hhxpress-appearance'

/**
 * 切换主题，缓存在localStorage
 */
export function useAppearance() {
  const classList = document.documentElement.classList

  return {
    toggle() {
      // https://developer.mozilla.org/zh-CN/docs/Web/API/DOMTokenList
      if (classList.contains('dark')) {
        setClassListDark(classList, false)
        localStorage.setItem(APPEARANCE_KEY, 'light') // 用户选择时肯定是浏览器环境
      } else {
        setClassListDark(classList)
        localStorage.setItem(APPEARANCE_KEY, 'dark')
      }
    },
  }
}

/**
 * 在css中应用主题
 */
function setClassListDark(classList: DOMTokenList, isDark = true) {
  if (isDark) {
    classList.add('dark')
  } else {
    classList.remove('dark')
  }
}
// ---

// 判断为浏览器环境时且加载js文件时（执行一次）
if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
  // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/documentElement
  const classList = document.documentElement.classList
  updateAppearance(classList)
  // 监听事件，当localStorage改变时更新主题（不同的tab可以同步改变主题）
  window.addEventListener('storage', () => updateAppearance(classList))
}

/**
 * 根据用户localStorage内的主题信息更新主题
 */
function updateAppearance(classList: DOMTokenList) {
  const userPreference = localStorage.getItem(APPEARANCE_KEY)
  setClassListDark(classList, userPreference === 'dark')
}
