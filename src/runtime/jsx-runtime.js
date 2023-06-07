// 拦截 react/jsx-runtime，拦截组件创建，通过props识别islands组件并记录
// ! 组件避免 {... props} 语法，babel 在碰到 {... props} 的语法的时候，会将组件编译为 React.createElement的格式，不符合预期

import * as jsxRuntime from 'react/jsx-runtime'

// 对于一些静态节点，React 会使用 jsxs 来进行创建，优化渲染性能
const originJsx = jsxRuntime.jsx
const originJsxs = jsxRuntime.jsxs

export const islandData = {
  // 记录 island 组件的数据
  islandProps: [],
  // 记录 island 组件的路径信息
  islandNameToPropsMap: {},
}

const internalJsx = (originJsx, type, props, ...args) => {
  if (props && props.__island) {
    islandData.islandProps.push(props)
    const name = type.name

    islandData['islandNameToPropsMap'][name] = props.__island
    delete props.__island

    // island组件添加div包裹
    return originJsx('div', {
      // 组件的 name 以及 props 数据在 islandProps 中的位置
      __island: `${name}:${islandData.islandProps.length - 1}`,
      children: originJsx(type, props, ...args),
    })
  }

  return originJsx(type, props, ...args)
}

export const jsx = (...args) => internalJsx(originJsx, ...args)
export const jsxs = (...args) => internalJsx(originJsxs, ...args)
export const Fragment = jsxRuntime.Fragment

// 渲染不同页面前应该清空island数据
export const clearIslandData = () => {
  islandData.islandProps = []
  islandData.islandNameToPropsMap = {}
}
