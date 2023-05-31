declare const jsx: () => void
declare const jsxs: () => void
declare const Fragment: any
declare const clearIslandData: () => void
declare const islandData: {
  islandProps: any[]
  islandNameToPropsMap: Record<string, string>
}

export { jsx, jsxs, Fragment, clearIslandData, islandData }
