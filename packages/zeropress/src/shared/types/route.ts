import { PageModule } from './page'

export interface Route {
  path: string
  element: React.ReactElement
  preload: () => Promise<PageModule>
}
