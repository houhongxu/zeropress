import { DARK_KEY } from '../consts'
import { isBrowser } from 'shared/utils'

export function useDark() {
  return {
    toggle,
  }
}

// 浏览器加载js时初始化
if (isBrowser()) {
  initDark()
}

function initDark() {
  const init = () => {
    // 读取storage状态初始化
    if (localStorage.getItem(DARK_KEY) === 'true') {
      const classList = document.documentElement.classList

      classList.add('dark')
    }
  }

  // 监听storage改变同步tab页
  window.addEventListener('storage', init)
}

function addDark() {
  const classList = document.documentElement.classList

  classList.add('dark')
  localStorage.setItem(DARK_KEY, 'true')
}

function removeDark() {
  const classList = document.documentElement.classList

  classList.remove('dark')
  localStorage.setItem(DARK_KEY, 'false')
}

function toggle() {
  const classList = document.documentElement.classList

  if (classList.contains('dark')) {
    removeDark()
  } else {
    addDark()
  }
}
