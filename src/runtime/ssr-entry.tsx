import { App } from './app'
import { renderToString } from 'react-dom/server'

export function renderInServer() {
  return renderToString(<App />)
}
