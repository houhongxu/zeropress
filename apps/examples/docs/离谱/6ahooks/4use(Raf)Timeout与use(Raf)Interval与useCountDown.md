# use(Raf)Timeout 与 use(Raf)Interval 与 useCountDown

## useTimeout

setTimeout 的 hook，返回 clear 函数来清除定时器

```ts
const useTimeout = (fn: () => void, delay?: number) => {
  // 使fn函数对象地址不变，哪怕fn内含有状态也不变
  const timerCallback = useMemoizedFn(fn)
  // 使setInterval的timer不变
  const timerRef = useRef<NodeJS.Timer | null>(null)

  // 使clear函数对象地址不变
  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    // 校验delay
    if (!isNumber(delay) || delay < 0) {
      return
    }

    // 保存最新定时器timer
    timerRef.current = setTimeout(timerCallback, delay)

    return clear
  }, [delay])

  return clear
}
```

## useRafTimeout

用 requestAnimationFrame 模拟实现的 useTimeout，更精准，页面不渲染的时候不触发函数执行，比如页面隐藏或最小化等

```ts
interface Handle {
  id: number | NodeJS.Timeout
}

// 先实现setRafTimeout
const setRafTimeout = function (
  callback: () => void,
  delay: number = 0,
): Handle {
  // 如果是node等环境没有requestAnimationFrame，直接使用setTimeout调用后的定时器id
  if (typeof requestAnimationFrame === typeof undefined) {
    return {
      id: setTimeout(callback, delay),
    }
  }

  // 记录定时器id
  const handle: Handle = {
    id: 0,
  }

  // 记录开始时间
  const startTime = new Date().getTime()

  // 递归调用requestAnimationFrame，这是requestAnimationFrame的使用方式
  const loop = () => {
    // 记录当前时间，话说这里也能用参数获取requestAnimationFrame调用的时间
    const current = new Date().getTime()

    // 如果delay的时间到了，执行callback
    if (current - startTime >= delay) {
      callback()
    } else {
      // 否则继续递归
      handle.id = requestAnimationFrame(loop)
    }
  }

  // 记录定时器id
  handle.id = requestAnimationFrame(loop)

  return handle
}

// 判断是否有cancelAnimationFrame
function cancelAnimationFrameIsNotDefined(t: any): t is NodeJS.Timer {
  return typeof cancelAnimationFrame === typeof undefined
}

// 清除setRafTimeout定时器
const clearRafTimeout = function (handle: Handle) {
  // 如果是node等环境没有cancelAnimationFrame使用clearTimeout
  if (cancelAnimationFrameIsNotDefined(handle.id)) {
    return clearTimeout(handle.id)
  }
  cancelAnimationFrame(handle.id)
}

// 和useTimeout逻辑类似
function useRafTimeout(fn: () => void, delay: number | undefined) {
  const fnRef = useLatest(fn)
  const timerRef = useRef<Handle>()

  useEffect(() => {
    if (!isNumber(delay) || delay < 0) return
    timerRef.current = setRafTimeout(() => {
      fnRef.current()
    }, delay)
    return () => {
      if (timerRef.current) {
        clearRafTimeout(timerRef.current)
      }
    }
  }, [delay])

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearRafTimeout(timerRef.current)
    }
  }, [])

  return clear
}
```

## useInterval

setInterval 的 hook，返回 clear 函数来清除定时器

```ts
const useInterval = (
  fn: () => void,
  delay?: number,
  options: { immediate?: boolean } = {},
) => {
  // 使fn函数对象地址不变，哪怕fn内含有状态也不变
  const timerCallback = useMemoizedFn(fn)
  // 使setInterval的timer不变
  const timerRef = useRef<NodeJS.Timer | null>(null)

  // 使clear函数对象地址不变
  const clear = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }, [])

  useEffect(() => {
    // 校验delay
    if (!isNumber(delay) || delay < 0) {
      return
    }

    // 如果配置immediate则第一次渲染也执行fn
    if (options.immediate) {
      timerCallback()
    }

    // 保存最新定时器timer
    timerRef.current = setInterval(timerCallback, delay)

    return clear
  }, [delay, options.immediate])

  return clear
}
```

## useRafInterval

用 requestAnimationFrame 模拟实现的 useInterval，更精准，页面不渲染的时候不触发函数执行，比如页面隐藏或最小化等

```ts
interface Handle {
  id: number | NodeJS.Timer
}

// 和useRafTimeout中类似
const setRafInterval = function (
  callback: () => void,
  delay: number = 0,
): Handle {
  if (typeof requestAnimationFrame === typeof undefined) {
    return {
      id: setInterval(callback, delay),
    }
  }
  let start = new Date().getTime()
  const handle: Handle = {
    id: 0,
  }
  const loop = () => {
    const current = new Date().getTime()
    if (current - start >= delay) {
      callback()
      start = new Date().getTime()
    }
    handle.id = requestAnimationFrame(loop)
  }
  handle.id = requestAnimationFrame(loop)
  return handle
}

function cancelAnimationFrameIsNotDefined(t: any): t is NodeJS.Timer {
  return typeof cancelAnimationFrame === typeof undefined
}

const clearRafInterval = function (handle: Handle) {
  if (cancelAnimationFrameIsNotDefined(handle.id)) {
    return clearInterval(handle.id)
  }
  cancelAnimationFrame(handle.id)
}

// 和useInterval中类似
function useRafInterval(
  fn: () => void,
  delay: number | undefined,
  options?: {
    immediate?: boolean
  },
) {
  const immediate = options?.immediate

  const fnRef = useLatest(fn)
  const timerRef = useRef<Handle>()

  useEffect(() => {
    if (!isNumber(delay) || delay < 0) return
    if (immediate) {
      fnRef.current()
    }
    timerRef.current = setRafInterval(() => {
      fnRef.current()
    }, delay)
    return () => {
      if (timerRef.current) {
        clearRafInterval(timerRef.current)
      }
    }
  }, [delay])

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearRafInterval(timerRef.current)
    }
  }, [])

  return clear
}
```

## useCountDown

倒计时 Hook

```ts
export type TDate = dayjs.ConfigType

export interface Options {
  leftTime?: number
  targetDate?: TDate
  interval?: number
  onEnd?: () => void
}

export interface FormattedRes {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

// 计算剩余时间
const calcLeft = (target?: TDate) => {
  if (!target) {
    return 0
  }
  // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
  const left = dayjs(target).valueOf() - Date.now()
  return left < 0 ? 0 : left
}

// 格式化毫秒为日期
const parseMs = (milliseconds: number): FormattedRes => {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000,
  }
}

const useCountdown = (options: Options = {}) => {
  const { leftTime, targetDate, interval = 1000, onEnd } = options || {}

  // 计算目标时间
  const target = useMemo<TDate>(() => {
    // 如果leftTime传入了值，注意undefined也算
    if ('leftTime' in options) {
      // 如果leftTime是>0的数字
      return isNumber(leftTime) && leftTime > 0
        ? Date.now() + leftTime
        : undefined
    } else {
      return targetDate
    }
  }, [leftTime, targetDate])

  // 倒计时状态，就是countdown
  const [timeLeft, setTimeLeft] = useState(() => calcLeft(target))

  // 保存onEnd钩子
  const onEndRef = useLatest(onEnd)

  useEffect(() => {
    // 没有目标时间则停止，并归零倒计时
    if (!target) {
      // for stop
      setTimeLeft(0)
      return
    }

    // 立即计算并保存一次
    setTimeLeft(calcLeft(target))

    const timer = setInterval(() => {
      // 每隔interval计算并保存倒计时
      const targetLeft = calcLeft(target)
      setTimeLeft(targetLeft)

      // 倒计时结束时清除计时器并执行onEnd钩子
      if (targetLeft === 0) {
        clearInterval(timer)
        onEndRef.current?.()
      }
    }, interval)

    return () => clearInterval(timer)
  }, [target, interval])

  // 将倒计时格式化为日期
  const formattedRes = useMemo(() => parseMs(timeLeft), [timeLeft])

  return [timeLeft, formattedRes] as const
}
```
