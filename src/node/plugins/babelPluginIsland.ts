// babel手册 https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/README.md
// babel使用类型有点麻烦 https://stackoverflow.com/questions/68425580/what-is-the-type-of-a-babel-plugin-parameter-written-in-typescript
// 官方回复在慢慢迁移 https://github.com/babel/babel/issues/10637
import { declare } from '@babel/helper-plugin-utils'
import type * as BabelCoreNamespace from '@babel/core'
import type * as BabelTypesNamespace from '@babel/types'
import { PluginPass, Visitor } from '@babel/core'
import {
  isJSXMemberExpression,
  JSXAttribute,
  JSXElement,
  stringLiteral,
} from '@babel/types'
import { MASK_SPLITTER } from 'node/constants'

export type Babel = typeof BabelCoreNamespace
export type BabelTypes = typeof BabelTypesNamespace

// https://babel.dev/docs/babel-helper-plugin-utils
export default declare((api) => {
  api.assertVersion(7) // 确保babel版本

  // traverse 时调用的函数
  // jsx的解析例子https://astexplorer.net/#/gist/e7faa55952585aac24cfbaf4cd7cf2e1/b06e70002a6f5d4b7a149e5f3436159bf3aed274
  const visitor: Visitor<PluginPass> = {
    JSXOpeningElement(path, state) {
      // 进入每个节点时调用
      // 获取组件名字，如 Aside
      const name = path.node.name

      let bindingName = ''

      if (name.type === 'JSXIdentifier') {
        bindingName = name.name
      } else if (name.type === 'JSXMemberExpression') {
        // A.B 的导入方式
        let object = name.object

        while (isJSXMemberExpression(object)) {
          object = object.object
        }

        bindingName = object.name
      } else {
        return
      }

      // 获取组件作用域信息
      const binding = path.scope.getBinding(bindingName)

      // 根据作用域信息拿到组件引入的位置
      if (binding?.path.parent.type === 'ImportDeclaration') {
        // 定位到 import 语句之后，拿到组件的引入路径
        const importPath = binding.path.parent.source
        // 组件的引入者
        const importer = state.filename || ''
        // 修改__islan 属性为路径
        const attributes = (path.container as JSXElement).openingElement
          .attributes

        attributes.forEach((attribute) => {
          const name = (attribute as JSXAttribute).name.name
          if (name === '__island') {
            ;(attribute as JSXAttribute).value = stringLiteral(
              `${importPath.value}${MASK_SPLITTER}${importer}`,
            )
          }
        })
      }
    },
  }

  return {
    name: 'transform-react-component-island',
    visitor,
  }
})
