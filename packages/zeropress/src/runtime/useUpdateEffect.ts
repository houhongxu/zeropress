import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

export function useUpdateEffect(effect: EffectCallback, deps: DependencyList) {
  const hasMounted = useRef(false)

  useEffect(() => {
    if (hasMounted.current) {
      return effect()
    } else {
      hasMounted.current = true
    }
  }, deps)
}
