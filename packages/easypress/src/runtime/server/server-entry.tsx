import App from '../default-theme'
import { renderToString } from 'react-dom/server'

export function render() {
  const html = renderToString(<App />)

  return html
}
