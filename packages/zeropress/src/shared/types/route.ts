import { PageModule } from './page'

export interface Route {
  timestamp: string
  file: string
  path: string
  element: React.ReactElement
  load: () => Promise<PageModule>
}
