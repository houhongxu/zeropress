# useUpdateEffect 与 useUpdateLayoutEffect

## useUpdateEffect 与 useUpdateLayoutEffect

- useUpdateEffect：跳过第一次渲染的 useEffect
- useUpdateLayoutEffect：跳过第一次渲染的 useLayoutEffect

```ts
type EffectHookType = typeof useEffect | typeof useLayoutEffect

export const createUpdateEffect: (hook: EffectHookType) => EffectHookType =
  (hook) => (effect, deps) => {
    // hook就是useEffect或者useLayoutEffect
    // effect和deps是useEffect(effect, deps)的参数

    // 初始化isMounted为false，未挂载过
    const isMounted = useRef(false)

    // for react-refresh
    // 渲染后重置isMounted
    hook(() => {
      return () => {
        isMounted.current = false
      }
    }, [])

    hook(() => {
      if (!isMounted.current) {
        // 第一次渲染不执行用户的effect回调
        isMounted.current = true
      } else {
        // 第二次渲染后都执行用户的effect回调
        return effect()
      }
    }, deps)
  }
```
