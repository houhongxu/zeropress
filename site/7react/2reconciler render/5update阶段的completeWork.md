# update 阶段的 completeWork

:::tip
lane 关键字 相关的内容和调度相关，暂时跳过
:::

![1](..//img/note/7/1.jpg)

:::note
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
        // 更新时进入这里，current更新时一直存在，workInProgress.stateNode是复用current的
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
        // 渲染时才进入这里
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

## updateHostComponent$1

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

    // 准备 属性需要更新的属性的 名字和值 的数组
    var updatePayload = prepareUpdate(
      instance,
      type,
      oldProps,
      newProps,
      rootContainerInstance,
      currentHostContext,
    ) // TODO: Type this specific to this type of component.

    // 属性更新数组 赋值给updateQueue属性
    workInProgress.updateQueue = updatePayload // If the update payload indicates that there is a change or if there
    // is a new ref we mark this as an update. All the work is done in commitWork.

    if (updatePayload) {
      // 给workInProgress标记Update
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

### prepareUpdate

```js
function prepareUpdate(
  domElement,
  type,
  oldProps,
  newProps,
  rootContainerInstance,
  hostContext,
) {
  {
    var hostContextDev = hostContext

    if (
      typeof newProps.children !== typeof oldProps.children &&
      (typeof newProps.children === 'string' ||
        typeof newProps.children === 'number')
    ) {
      var string = '' + newProps.children
      var ownAncestorInfo = updatedAncestorInfo(
        hostContextDev.ancestorInfo,
        type,
      )
      validateDOMNesting(null, string, ownAncestorInfo)
    }
  }

  return diffProperties(domElement, type, oldProps, newProps)
}
```

## diffProperties

比较属性

```js
function diffProperties(
  domElement,
  tag,
  lastRawProps,
  nextRawProps,
  rootContainerElement,
) {
  {
    validatePropertiesInDevelopment(tag, nextRawProps)
  }

  var updatePayload = null
  var lastProps
  var nextProps

  // 根据tag处理一些表单标签
  switch (tag) {
    case 'input':
      lastProps = getHostProps(domElement, lastRawProps)
      nextProps = getHostProps(domElement, nextRawProps)
      updatePayload = []
      break

    case 'option':
      lastProps = getHostProps$1(domElement, lastRawProps)
      nextProps = getHostProps$1(domElement, nextRawProps)
      updatePayload = []
      break

    case 'select':
      lastProps = getHostProps$2(domElement, lastRawProps)
      nextProps = getHostProps$2(domElement, nextRawProps)
      updatePayload = []
      break

    case 'textarea':
      lastProps = getHostProps$3(domElement, lastRawProps)
      nextProps = getHostProps$3(domElement, nextRawProps)
      updatePayload = []
      break

    default:
      lastProps = lastRawProps
      nextProps = nextRawProps

      if (
        typeof lastProps.onClick !== 'function' &&
        typeof nextProps.onClick === 'function'
      ) {
        // TODO: This cast may not be sound for SVG, MathML or custom elements.
        trapClickOnNonInteractiveElement(domElement)
      }

      break
  }

  // 判断属性的合法性
  assertValidProps(tag, nextProps)
  var propKey
  var styleName
  var styleUpdates = null

  // 本次更新开始前的属性，属性被删除时
  for (propKey in lastProps) {
    // 更新后有 或者 现在没有则跳过
    if (
      nextProps.hasOwnProperty(propKey) ||
      !lastProps.hasOwnProperty(propKey) ||
      lastProps[propKey] == null
    ) {
      continue
    }

    if (propKey === STYLE) {
      var lastStyle = lastProps[propKey]

      for (styleName in lastStyle) {
        if (lastStyle.hasOwnProperty(styleName)) {
          if (!styleUpdates) {
            styleUpdates = {}
          }

          styleUpdates[styleName] = ''
        }
      }
    } else if (propKey === DANGEROUSLY_SET_INNER_HTML || propKey === CHILDREN);
    else if (
      propKey === SUPPRESS_CONTENT_EDITABLE_WARNING ||
      propKey === SUPPRESS_HYDRATION_WARNING
    );
    else if (propKey === AUTOFOCUS);
    else if (registrationNameDependencies.hasOwnProperty(propKey)) {
      // This is a special case. If any listener updates we need to ensure
      // that the "current" fiber pointer gets updated so we need a commit
      // to update this element.
      if (!updatePayload) {
        updatePayload = []
      }
    } else {
      // For all other deleted properties we add it to the queue. We use
      // the allowed property list in the commit phase instead.
      ;(updatePayload = updatePayload || []).push(propKey, null)
    }
  }

  // 本次更新需要改变的props，属性更新或者新增时
  for (propKey in nextProps) {
    var nextProp = nextProps[propKey]
    var lastProp = lastProps != null ? lastProps[propKey] : undefined
    // 更新后没有 或者 不更新 或者 没有该属性 则跳过
    if (
      !nextProps.hasOwnProperty(propKey) ||
      nextProp === lastProp ||
      (nextProp == null && lastProp == null)
    ) {
      continue
    }

    // 分别处理各个属性
    if (propKey === STYLE) {
      {
        if (nextProp) {
          // Freeze the next style object so that we can assume it won't be
          // mutated. We have already warned for this in the past.
          Object.freeze(nextProp)
        }
      }

      if (lastProp) {
        // Unset styles on `lastProp` but not on `nextProp`.
        for (styleName in lastProp) {
          if (
            lastProp.hasOwnProperty(styleName) &&
            (!nextProp || !nextProp.hasOwnProperty(styleName))
          ) {
            if (!styleUpdates) {
              styleUpdates = {}
            }

            styleUpdates[styleName] = ''
          }
        } // Update styles that changed since `lastProp`.

        for (styleName in nextProp) {
          if (
            nextProp.hasOwnProperty(styleName) &&
            lastProp[styleName] !== nextProp[styleName]
          ) {
            if (!styleUpdates) {
              styleUpdates = {}
            }

            styleUpdates[styleName] = nextProp[styleName]
          }
        }
      } else {
        // Relies on `updateStylesByID` not mutating `styleUpdates`.
        if (!styleUpdates) {
          if (!updatePayload) {
            updatePayload = []
          }

          updatePayload.push(propKey, styleUpdates)
        }

        styleUpdates = nextProp
      }
    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
      var nextHtml = nextProp ? nextProp[HTML$1] : undefined
      var lastHtml = lastProp ? lastProp[HTML$1] : undefined

      if (nextHtml != null) {
        if (lastHtml !== nextHtml) {
          ;(updatePayload = updatePayload || []).push(propKey, nextHtml)
        }
      }
    } else if (propKey === CHILDREN) {
      if (typeof nextProp === 'string' || typeof nextProp === 'number') {
        ;(updatePayload = updatePayload || []).push(propKey, '' + nextProp)
      }
    } else if (
      propKey === SUPPRESS_CONTENT_EDITABLE_WARNING ||
      propKey === SUPPRESS_HYDRATION_WARNING
    );
    else if (registrationNameDependencies.hasOwnProperty(propKey)) {
      if (nextProp != null) {
        // We eagerly listen to this even though we haven't committed yet.
        if (typeof nextProp !== 'function') {
          warnForInvalidEventListener(propKey, nextProp)
        }

        if (propKey === 'onScroll') {
          listenToNonDelegatedEvent('scroll', domElement)
        }
      }

      if (!updatePayload && lastProp !== nextProp) {
        // This is a special case. If any listener updates we need to ensure
        // that the "current" props pointer gets updated so we need a commit
        // to update this element.
        updatePayload = []
      }
    } else if (
      typeof nextProp === 'object' &&
      nextProp !== null &&
      nextProp.$$typeof === REACT_OPAQUE_ID_TYPE
    ) {
      // If we encounter useOpaqueReference's opaque object, this means we are hydrating.
      // In this case, call the opaque object's toString function which generates a new client
      // ID so client and server IDs match and throws to rerender.
      nextProp.toString()
    } else {
      // For any other property we always add it to the queue and then we
      // filter it out using the allowed property list during the commit.

      // title属性会进入此处，赋值为[key:,value,key,value...]
      ;(updatePayload = updatePayload || []).push(propKey, nextProp)
    }
  }

  if (styleUpdates) {
    {
      validateShorthandPropertyCollisionInDev(styleUpdates, nextProps[STYLE])
    }

    ;(updatePayload = updatePayload || []).push(STYLE, styleUpdates)
  }

  return updatePayload
} // Apply the diff.
```
