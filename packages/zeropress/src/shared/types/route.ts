import { PageModule } from './page'
import { ComponentType } from 'react'

export interface Route {
  timestamp: string
  file: string
  path: string
  element: React.ReactElement
  preload: () => Promise<PageModule<ComponentType<unknown>>>
}
