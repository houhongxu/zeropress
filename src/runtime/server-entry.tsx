// 服务端执行的入口，通过react的api处理代码为字符串

import { renderToString } from 'react-dom/server'
import { App } from './App'

export function renderInServer() {
  return renderToString(<App></App>)
}
