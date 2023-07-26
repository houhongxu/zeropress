# mount 阶段的 completeWork

:::tip
lane 关键字 相关的内容和调度相关，暂时跳过
:::

![1](..//img/note/7/1.jpg)

:::note
渲染顺序 img->p->code，以渲染 img 和 p 调试
:::

## completeWork

完成工作

```js
function completeWork(current, workInProgress, renderLanes) {
  var newProps = workInProgress.pendingProps

  // 根据tag调用不同函数
  switch (workInProgress.tag) {
    case IndeterminateComponent:
    case LazyComponent:
    case SimpleMemoComponent:
    case FunctionComponent:
    case ForwardRef:
    case Fragment:
    case Mode:
    case Profiler:
    case ContextConsumer:
    case MemoComponent:
      return null

    case ClassComponent: {
      var Component = workInProgress.type

      if (isContextProvider(Component)) {
        popContext(workInProgress)
      }

      return null
    }

    case HostComponent: {
      popHostContext(workInProgress)
      var rootContainerInstance = getRootHostContainer()
      var type = workInProgress.type

      if (current !== null && workInProgress.stateNode != null) {
        // current存在且dom存在
        updateHostComponent$1(
          current,
          workInProgress,
          type,
          newProps,
          rootContainerInstance,
        )

        if (current.ref !== workInProgress.ref) {
          markRef$1(workInProgress)
        }
      } else {
        // 内容检查
        if (!newProps) {
          if (!(workInProgress.stateNode !== null)) {
            {
              throw Error(
                'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.',
              )
            }
          } // This can happen when we abort work.

          return null
        }

        var currentHostContext = getHostContext() // TODO: Move createInstance to beginWork and keep it on a context
        // "stack" as the parent. Then append children as we go in beginWork
        // or completeWork depending on whether we want to add them top->down or
        // bottom->up. Top->down is faster in IE11.

        // ssr相关暂时跳过
        var _wasHydrated = popHydrationState(workInProgress)

        if (_wasHydrated) {
          // ssr相关暂时跳过

          // TODO: Move this and createInstance step into the beginPhase
          // to consolidate.
          if (
            prepareToHydrateHostInstance(
              workInProgress,
              rootContainerInstance,
              currentHostContext,
            )
          ) {
            // If changes to the hydrated node need to be applied at the
            // commit-phase we mark this as such.
            markUpdate(workInProgress)
          }
        } else {
          // 为fiber创建dom节点
          var instance = createInstance(
            type,
            newProps,
            rootContainerInstance,
            currentHostContext,
            workInProgress,
          )

          // 将创建的dom的子节点挂载到创建的dom上
          appendAllChildren(instance, workInProgress, false, false)

          // 将dom存入fiber的stateNode属性
          workInProgress.stateNode = instance // Certain renderers require commit-time effects for initial mount.
          // (eg DOM renderer supports auto-focus for certain elements).
          // Make sure such renderers get scheduled for later work.

          // 为dom节点设置属性
          if (
            finalizeInitialChildren(
              instance,
              type,
              newProps,
              rootContainerInstance,
            )
          ) {
            markUpdate(workInProgress)
          }
        }

        if (workInProgress.ref !== null) {
          // If there is a ref on a host node we need to schedule a callback
          markRef$1(workInProgress)
        }
      }

      return null
    }

    case HostText: {
      var newText = newProps

      if (current && workInProgress.stateNode != null) {
        var oldText = current.memoizedProps // If we have an alternate, that means this is an update and we need
        // to schedule a side-effect to do the updates.

        updateHostText$1(current, workInProgress, oldText, newText)
      } else {
        if (typeof newText !== 'string') {
          if (!(workInProgress.stateNode !== null)) {
            {
              throw Error(
                'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.',
              )
            }
          } // This can happen when we abort work.
        }

        var _rootContainerInstance = getRootHostContainer()

        var _currentHostContext = getHostContext()

        var _wasHydrated2 = popHydrationState(workInProgress)

        if (_wasHydrated2) {
          if (prepareToHydrateHostTextInstance(workInProgress)) {
            markUpdate(workInProgress)
          }
        } else {
          workInProgress.stateNode = createTextInstance(
            newText,
            _rootContainerInstance,
            _currentHostContext,
            workInProgress,
          )
        }
      }

      return null
    }

    case IncompleteClassComponent: {
      // Same as class component case. I put it down here so that the tags are
      // sequential to ensure this switch is compiled to a jump table.
      var _Component = workInProgress.type

      if (isContextProvider(_Component)) {
        popContext(workInProgress)
      }

      return null
    }

    // 省略部分case
  }

  {
    {
      throw Error(
        'Unknown unit of work tag (' +
          workInProgress.tag +
          '). This error is likely caused by a bug in React. Please file an issue.',
      )
    }
  }
}
```

### createInstance

创建 dom 实例

```js
function createInstance(
  type,
  props,
  rootContainerInstance,
  hostContext,
  internalInstanceHandle,
) {
  var parentNamespace

  {
    // TODO: take namespace into account when validating.
    var hostContextDev = hostContext
    validateDOMNesting(type, null, hostContextDev.ancestorInfo)

    if (
      typeof props.children === 'string' ||
      typeof props.children === 'number'
    ) {
      var string = '' + props.children
      var ownAncestorInfo = updatedAncestorInfo(
        hostContextDev.ancestorInfo,
        type,
      )
      validateDOMNesting(null, string, ownAncestorInfo)
    }

    parentNamespace = hostContextDev.namespace
  }

  // 创建当前节点的dom元素
  var domElement = createElement(
    type,
    props,
    rootContainerInstance,
    parentNamespace,
  )

  precacheFiberNode(internalInstanceHandle, domElement)

  updateFiberProps(domElement, props)

  return domElement
}
```

## appendAllChildren

```js
var appendAllChildren
var updateHostContainer
var updateHostComponent$1
var updateHostText$1

{
  // Mutation mode
  appendAllChildren = function (
    parent,
    workInProgress,
    needsVisibilityToggle,
    isHidden,
  ) {
    // parent是当前fiber在createInstance创建的dom

    // We only have the top Fiber that was created but we need recurse down its
    // children to find all the terminal nodes.

    // 获取子fiber
    var node = workInProgress.child

    // 渲染img时node为null,渲染code时为{num}或者'src/App.js'
    while (node !== null) {
      if (node.tag === HostComponent || node.tag === HostText) {
        // 渲染code时进入，将子dom挂载在当前dom上
        appendInitialChild(parent, node.stateNode)
      } else if (node.tag === HostPortal);
      else if (node.child !== null) {
        node.child.return = node
        node = node.child
        continue
      }

      if (node === workInProgress) {
        return
      }

      while (node.sibling === null) {
        if (node.return === null || node.return === workInProgress) {
          return
        }

        node = node.return
      }

      node.sibling.return = node.return
      node = node.sibling
    }
  }

  updateHostContainer = function (workInProgress) {
    // Noop
  }

  updateHostComponent$1 = function (
    current,
    workInProgress,
    type,
    newProps,
    rootContainerInstance,
  ) {
    // If we have an alternate, that means this is an update and we need to
    // schedule a side-effect to do the updates.
    var oldProps = current.memoizedProps

    if (oldProps === newProps) {
      // In mutation mode, this is sufficient for a bailout because
      // we won't touch this node even if children changed.
      return
    } // If we get updated because one of our children updated, we don't
    // have newProps so we'll have to reuse them.
    // TODO: Split the update API as separate for the props vs. children.
    // Even better would be if children weren't special cased at all tho.

    var instance = workInProgress.stateNode
    var currentHostContext = getHostContext() // TODO: Experiencing an error where oldProps is null. Suggests a host
    // component is hitting the resume path. Figure out why. Possibly
    // related to `hidden`.

    var updatePayload = prepareUpdate(
      instance,
      type,
      oldProps,
      newProps,
      rootContainerInstance,
      currentHostContext,
    ) // TODO: Type this specific to this type of component.

    workInProgress.updateQueue = updatePayload // If the update payload indicates that there is a change or if there
    // is a new ref we mark this as an update. All the work is done in commitWork.

    if (updatePayload) {
      markUpdate(workInProgress)
    }
  }

  updateHostText$1 = function (current, workInProgress, oldText, newText) {
    // If the text differs, mark it as an update. All the work in done in commitWork.
    if (oldText !== newText) {
      markUpdate(workInProgress)
    }
  }
}
```
