# useCreation

useCreation 是 useMemo 或 useRef 的替代品。

- useMemo 无法保证被 memo 的值一定不会被重计算
- useRef 对复杂值如 new Obj() 会导致实例重复创建

而 useCreation 空 deps 被 memo 的值不会被重计算，参数是函数也保证了实例不会重新创建

```ts
export default function useCreation<T>(factory: () => T, deps: DependencyList) {
  // 使用ref保存是否创建等状态
  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false,
  })
  // 未创建 或者 依赖不同
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps
    current.obj = factory()
    current.initialized = true
  }
  return current.obj as T
}
```
