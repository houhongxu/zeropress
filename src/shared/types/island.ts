import { islandData } from 'runtime/jsx-runtime'

export type PropsWithIsland = {
  __island?: boolean
}

export type RenderInServerRelsult = typeof islandData & {
  appHtml: string
}
