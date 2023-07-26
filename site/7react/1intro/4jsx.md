# jsx

:::tip
jsx 会编译在运行前为 React Element，所以源码内仅考虑 React Element
:::

## React Element 与 fiber

在组件 mount 时，Reconciler 根据 React Element 描述的组件内容生成组件对应的 Fiber 节点。

在 update 时，Reconciler 将 React Element 与 Fiber 节点保存的数据对比，生成组件对应的 Fiber 节点，并根据对比结果为 Fiber 节点打上标记。

## React.createElement

JSX 并不是只能被编译为 React.createElement 方法，你可以通过@babel/plugin-transform-react-jsx (opens new window)插件显式告诉 Babel 编译时需要将 JSX 编译为什么函数的调用（默认为 React.createElement）。

```js
export function createElement(type, config, children) {
  let propName

  const props = {}

  let key = null
  let ref = null
  let self = null
  let source = null

  if (config != null) {
    // 将 config 处理后赋值给 props
    // ...省略
  }

  const childrenLength = arguments.length - 2
  // 处理 children，会被赋值给props.children
  // ...省略

  // 处理 defaultProps
  // ...省略

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props)
}

const ReactElement = function (type, key, ref, self, source, owner, props) {
  const element = {
    // 标记这是个 React Element
    $$typeof: REACT_ELEMENT_TYPE,

    type: type,
    key: key,
    ref: ref,
    props: props,
    _owner: owner,
  }

  return element
}
```

React.createElement 最终会调用 ReactElement 方法返回一个包含组件数据的对象，该对象有个参数$$typeof: REACT_ELEMENT_TYPE 标记了该对象是个 React Element。

## 判断 React Element

React 提供了验证合法 React Element 的全局 API React.isValidElement (opens new window)，我们看下他的实现：

```js
export function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE
}
```

:::tip
满足$$typeof === REACT_ELEMENT_TYPE 的非 null 对象就是一个合法的 React Element。
:::

## React Component

React 通过 ClassComponent 实例原型上的 isReactComponent 变量判断是否是 ClassComponent。

```js
ClassComponent.prototype.isReactComponent = {}
```
