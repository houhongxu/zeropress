# useUpdate

强制重新渲染

```ts
const useUpdate = () => {
  // 初始为第一个对象字面量
  const [, setState] = useState({})

  // 调用时更新为第二个对象字面量来触发重新渲染
  return useCallback(() => setState({}), [])
}
```
