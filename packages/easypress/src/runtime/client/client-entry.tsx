import App from '../default-theme'
import { createRoot } from 'react-dom/client'
import config from 'virtual:config'

console.log('用户配置：', config)

createRoot(document.getElementById('root')!).render(<App></App>)
