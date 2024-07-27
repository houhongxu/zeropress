import { RefObject, useEffect, useState } from 'react'

export function useIntersectionObserver<T extends HTMLElement>(
  ref: RefObject<T> | RefObject<T>[],
  options?: IntersectionObserver,
) {
  const refs = Array.isArray(ref) ? ref : [ref]
  const [state, setState] = useState<boolean>()
  const [ratio, setRatio] = useState<number>()

  useEffect(() => {
    const observerInstance = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        setRatio(entry.intersectionRatio)
        setState(entry.isIntersecting)
      }
    }, options)

    refs.forEach((ref) => {
      ref.current && observerInstance.observe(ref.current)
    })

    return () => {
      observerInstance.disconnect()
    }
  }, [refs])

  return { isIntersecting: state, intersectionRatio: ratio }
}
