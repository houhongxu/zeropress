const classList = document.documentElement.classList

const APPEARANCE_KEY = 'appearance'

const setClassList = (isDark = false) => {
  if (isDark) {
    classList.add('dark')
  } else {
    classList.remove('dark')
  }
}

const updateApperance = () => {
  const userPreference = localStorage.getItem(APPEARANCE_KEY)
  setClassList(userPreference === 'dark')
}

if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
  // 更新状态
  updateApperance()
  // 多页面同步
  window.addEventListener('storage', updateApperance)
}

export function toggle() {
  if (classList.contains('dark')) {
    setClassList(false)
    localStorage.setItem(APPEARANCE_KEY, 'light')
  } else {
    setClassList(true)
    localStorage.setItem(APPEARANCE_KEY, 'dark')
  }
}
