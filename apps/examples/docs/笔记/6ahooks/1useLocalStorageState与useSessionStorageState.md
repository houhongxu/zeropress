# useLocalStorageState 与 useSessionStorageState

- useLocalStorageState
- useSessionStorageState

都是通过函数 createUseStorageState来生成

## createUseStorageState

```ts
const useLocalStorageState = createUseStorageState(() =>
  isBrowser ? localStorage : undefined,
)

const useSessionStorageState = createUseStorageState(() =>
  isBrowser ? sessionStorage : undefined,
)

export function createUseStorageState(getStorage: () => Storage | undefined) {
  function useStorageState<T>(key: string, options: Options<T> = {}) {
    let storage: Storage | undefined

    // 错误处理
    const {
      onError = (e) => {
        console.error(e)
      },
    } = options

    // https://github.com/alibaba/hooks/issues/800
    // 防止Cookie禁用时无法获取localStorage或者SessionStorage
    // 普通用户期望的功能是“禁用 Cookie”，但实际上意味着“不要让网站在我的计算机上保留数据”，目前，该行为取决于浏览器
    try {
      storage = getStorage()
    } catch (err) {
      onError(err)
    }

    // 自定义序列化方法
    const serializer = (value: T) => {
      if (options?.serializer) {
        return options?.serializer(value)
      }
      return JSON.stringify(value)
    }

    // 自定义反序列化方法
    const deserializer = (value: string) => {
      if (options?.deserializer) {
        return options?.deserializer(value)
      }
      return JSON.parse(value)
    }

    // 获取当前存储的值
    function getStoredValue() {
      try {
        const raw = storage?.getItem(key)
        if (raw) {
          return deserializer(raw)
        }
      } catch (e) {
        onError(e)
      }
      // 没有存的值时使用defaultValue()或者defaultValue
      if (isFunction(options?.defaultValue)) {
        return options?.defaultValue()
      }
      return options?.defaultValue
    }

    // 初始化状态
    const [state, setState] = useState<T>(() => getStoredValue())

    // key改变时更新状态
    useUpdateEffect(() => {
      setState(getStoredValue())
    }, [key])

    // 更新状态，参数同setState形式
    const updateState = (value: T | IFuncUpdater<T>) => {
      const currentState = isFunction(value) ? value(state) : value
      setState(currentState)

      // undefined时移除存储，否则更新存储
      if (isUndef(currentState)) {
        storage?.removeItem(key)
      } else {
        try {
          storage?.setItem(key, serializer(currentState))
        } catch (e) {
          console.error(e)
        }
      }
    }

    return [state, useMemoizedFn(updateState)] as const
  }
  
  return useStorageState
}
```
