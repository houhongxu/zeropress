import { useEffect } from 'react'

const KEY = 'EASYPRESS_THEME'

export function useDark() {
  const classList = document.documentElement.classList

  const addDark = () => {
    classList.add('dark')
    localStorage.setItem(KEY, 'dark')
  }

  const removeDark = () => {
    classList.remove('dark')
    localStorage.setItem(KEY, 'light')
  }

  const toggle = () => {
    if (classList.contains('dark')) {
      removeDark()
    } else {
      addDark()
    }
  }

  useEffect(() => {
    // 渲染时读取storage状态初始化
    if (localStorage.getItem(KEY) === 'dark') {
      addDark()
    }

    // 监听storage改变同步tab页
    window.addEventListener('storage', toggle)

    return () => {
      window.removeEventListener('storage', toggle)
    }
  }, [])

  return {
    toggle,
  }
}
