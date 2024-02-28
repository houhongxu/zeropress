import { useEffect, useState } from 'react'

export function useWindowScroll() {
  const [x, setX] = useState<number>()
  const [y, setY] = useState<number>()

  useEffect(() => {
    const handleScroll = () => {
      setX(window.scrollX)
      setY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { x, y }
}
