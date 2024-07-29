# useRequest

useRequest 使用的插件机制
通过 useRequestImplement 引入插件

```ts
// function useRequest<TData, TParams extends any[], TFormated, TTFormated extends TFormated = any>(
//   service: Service<TData, TParams>,
//   options: OptionsWithFormat<TData, TParams, TFormated, TTFormated>,
//   plugins?: Plugin<TData, TParams>[],
// ): Result<TFormated, TParams>
// function useRequest<TData, TParams extends any[]>(
//   service: Service<TData, TParams>,
//   options?: OptionsWithoutFormat<TData, TParams>,
//   plugins?: Plugin<TData, TParams>[],
// ): Result<TData, TParams>
function useRequest<TData, TParams extends any[]>(
  service: Service<TData, TParams>, // service就是接口
  options?: Options<TData, TParams>, // options就是配置项
  plugins?: Plugin<TData, TParams>[], // plugins是插件
) {
  return useRequestImplement<TData, TParams>(service, options, [
    ...(plugins || []),
    useDebouncePlugin,
    useLoadingDelayPlugin,
    usePollingPlugin,
    useRefreshOnWindowFocusPlugin,
    useThrottlePlugin,
    useAutoRunPlugin,
    useCachePlugin,
    useRetryPlugin,
  ] as Plugin<TData, TParams>[])
}
```

## useRequestImplement

```ts
function useRequestImplement<TData, TParams extends any[]>(
  service: Service<TData, TParams>, // service就是接口，useRequset透传
  options: Options<TData, TParams> = {}, // options就是配置项，useRequset透传
  plugins: Plugin<TData, TParams>[] = [], // plugins是插件，
) {
  const { manual = false, ...rest } = options

  // 开发环境
  if (isDev) {
    if (options.defaultParams && !Array.isArray(options.defaultParams)) {
      console.warn(
        `expected defaultParams is array, got ${typeof options.defaultParams}`,
      )
    }
  }

  // 将配置了默认manual的配置项给fetch
  const fetchOptions = {
    manual,
    ...rest,
  }

  // 始终保存最新的请求函数
  const serviceRef = useLatest(service)

  // 强制组件重新渲染的函数
  const update = useUpdate()

  // Fetch实例处理请求，useCreation确保实例不会重复创建
  const fetchInstance = useCreation(() => {
    // 调用插件的初始化钩子，然后获取Fetch初始值，如useAutoRunPlugin配置了loading初始值，注意和其他钩子在插件中写法不一样，这个是直接挂在函数上的，而不是返回值上
    const initState = plugins
      .map((p) => p?.onInit?.(fetchOptions))
      .filter(Boolean)

    return new Fetch<TData, TParams>(
      serviceRef,
      fetchOptions,
      update,
      Object.assign({}, ...initState),
    )
  }, [])

  // 在fetchInstance保存fetchOptions，为了fetchInstance调用options里的钩子，但是为什么类中没定义这个变量?
  fetchInstance.options = fetchOptions

  // 执行所有插件返回的包含多个钩子的对象
  fetchInstance.pluginImpls = plugins.map((p) => p(fetchInstance, fetchOptions))

  // 组件渲染时，未配置手动请求时，发起请求
  useMount(() => {
    if (!manual) {
      // useCachePlugin can set fetchInstance.state.params from cache when init
      const params = fetchInstance.state.params || options.defaultParams || []
      // @ts-ignore
      fetchInstance.run(...params)
    }
  })

  // 组件销毁时取消请求
  useUnmount(() => {
    fetchInstance.cancel()
  })

  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    params: fetchInstance.state.params || [],
    cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance)),
    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),
    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),
    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),
    mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance)),
  } as Result<TData, TParams>
}
```

## Fetch

核心代码

```ts
export default class Fetch<TData, TParams extends any[]> {
  // 插件钩子对象的数组
  pluginImpls: PluginReturn<TData, TParams>[]

  // 记录的请求次数
  count: number = 0

  // 状态
  state: FetchState<TData, TParams> = {
    loading: false,
    params: undefined,
    data: undefined,
    error: undefined,
  }

  constructor(
    public serviceRef: MutableRefObject<Service<TData, TParams>>, // service
    public options: Options<TData, TParams>, // options
    public subscribe: Subscribe, // 强制渲染的函数
    public initState: Partial<FetchState<TData, TParams>> = {}, // 初始状态
  ) {
    // 设置初始状态
    this.state = {
      ...this.state,
      loading: !options.manual,
      ...initState,
    }
  }

  // 设置状态并强制渲染，没有用react的useState来保证状态改变时渲染，而是用强制渲染新数据实现
  setState(s: Partial<FetchState<TData, TParams>> = {}) {
    this.state = {
      ...this.state,
      ...s,
    }
    this.subscribe()
  }

  // 执行钩子
  runPluginHandler(event: keyof PluginReturn<TData, TParams>, ...rest: any[]) {
    // 遍历插件钩子对象的数组，执行对应钩子
    const r = this.pluginImpls.map((i) => i[event]?.(...rest)).filter(Boolean)

    // 返回钩子给的状态
    return Object.assign({}, ...r)
  }

  // 核心请求函数
  async runAsync(...params: TParams): Promise<TData> {
    // 请求次数加一
    this.count += 1
    const currentCount = this.count

    // 执行插件onBefore钩子，并获取钩子给的状态
    const {
      stopNow = false,
      returnNow = false,
      ...state
    } = this.runPluginHandler('onBefore', params)

    // 如果钩子给了stopNow就停止
    // stop request
    if (stopNow) {
      return new Promise(() => {})
    }

    // 强制渲染新状态
    this.setState({
      loading: true,
      params,
      ...state,
    })

    // 如果钩子给了stopNow就返回
    // return now
    if (returnNow) {
      return Promise.resolve(state.data)
    }

    // 调用配置里的钩子onBefore
    this.options.onBefore?.(params)

    try {
      // 获取真正的请求函数
      let { servicePromise } = this.runPluginHandler(
        'onRequest',
        this.serviceRef.current,
        params,
      )
      if (!servicePromise) {
        servicePromise = this.serviceRef.current(...params)
      }

      // 开始请求，res是promise的then
      const res = await servicePromise

      // 取消请求
      if (currentCount !== this.count) {
        // prevent run.then when request is canceled
        return new Promise(() => {})
      }

      // const formattedResult = this.options.formatResultRef.current ? this.options.formatResultRef.current(res) : res;

      // 强制渲染新状态
      this.setState({
        data: res,
        error: undefined,
        loading: false,
      })

      // 调用配置里的钩子onSuccess和插件里的
      this.options.onSuccess?.(res, params)
      this.runPluginHandler('onSuccess', res, params)

      // 调用配置里的钩子onFinally
      this.options.onFinally?.(params, res, undefined)

      // 调用插件里的钩子onFinally
      if (currentCount === this.count) {
        this.runPluginHandler('onFinally', params, res, undefined)
      }

      // 返回promise的then
      return res
    } catch (error) {
      if (currentCount !== this.count) {
        // prevent run.then when request is canceled
        return new Promise(() => {})
      }

      this.setState({
        error,
        loading: false,
      })

      this.options.onError?.(error, params)
      this.runPluginHandler('onError', error, params)

      this.options.onFinally?.(params, undefined, error)

      if (currentCount === this.count) {
        this.runPluginHandler('onFinally', params, undefined, error)
      }

      throw error
    }
  }

  // 处理了promise的then的错误的函数
  run(...params: TParams) {
    this.runAsync(...params).catch((error) => {
      if (!this.options.onError) {
        console.error(error)
      }
    })
  }

  // 取消请求
  cancel() {
    this.count += 1
    this.setState({
      loading: false,
    })

    this.runPluginHandler('onCancel')
  }

  // 再请求一次
  refresh() {
    // @ts-ignore
    this.run(...(this.state.params || []))
  }

  // 返回新请求的promise的then
  refreshAsync() {
    // @ts-ignore
    return this.runAsync(...(this.state.params || []))
  }

  // 修改data
  mutate(data?: TData | ((oldData?: TData) => TData | undefined)) {
    const targetData = isFunction(data) ? data(this.state.data) : data

    // 调用插件里的钩子onMutate
    this.runPluginHandler('onMutate', targetData)

    // 强制渲染新状态
    this.setState({
      data: targetData,
    })
  }
}
```
