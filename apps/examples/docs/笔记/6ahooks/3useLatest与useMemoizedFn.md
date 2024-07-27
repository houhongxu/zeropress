# useLatest 与 useMemoizedFn

## useLatest

获取最新值的 hook，但是不能避免对象的地址改变

```ts
// 每次渲染都将最新的value存到ref中，但是value如果是引用类型地址还是会变
function useLatest<T>(value: T) {
  const ref = useRef(value)
  ref.current = value

  return ref
}
```

## useMemoizedFn

获取最新更新了状态的最新函数的 hook，而且函数地址不变，理论上可以替换 useCallback

```ts
type noop = (this: any, ...args: any[]) => any

// https://github.com/alibaba/hooks/pull/1470
type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>

// 返回更新了状态但是地址不变的fn
function useMemoizedFn<T extends noop>(fn: T) {
  // 开发环境日志
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(
        `useMemoizedFn expected parameter is a function, got ${typeof fn}`,
      )
    }
  }

  // fnRef因为适配所以分开写
  // 本质就是fnRef=useLatest(fn)
  // 注意fnRef.current的地址会改变

  // 使用useRef保存最新的fn
  const fnRef = useRef<T>(fn)

  // 适配 react devtool
  // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = useMemo(() => fn, [fn])

  // 初始化memoizedFn，memoizedFn.current的函数地址不会改变
  const memoizedFn = useRef<PickFunction<T>>()

  // 只有初始化时赋值
  if (!memoizedFn.current) {
    // 这里的第一个参数this是适配eslint的eslint no-invalid-this https://github.com/alibaba/hooks/pull/1464
    // 这里是防止函数地址改变才包裹一层function
    // 防止函数this指向丢失使用apply调用
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args)
    }
  }

  // 返回的memoizedFn.current始终是通过function包裹的fn.current，fn.current保证是最新的函数
  return memoizedFn.current as T
}
```
