# update 阶段的 beginWork

:::tip
lane 关键字 相关的内容和调度相关，暂时跳过
:::

![1](..//img/note/7/1.jpg)

:::note
更新时所有节点都有 current，注意与 mount 时的区别
:::

## createWorkInProgress

```js
function createWorkInProgress(current, pendingProps) {
  // 首次mount时，会执行一次创建rootFiber，后续则不进入，由beginWork创建子fiber
  // 首次更新时，先执行一次处理rootFiber的workInProgress
  var workInProgress = current.alternate

  // 首次mount，mountroot时有current无workInProgress
  // 首次更新时，只有rootFiber有workInProgress
  if (workInProgress === null) {
    // rootFiber以外更新时都进入这里

    // We use a double buffering pooling technique because we know that we'll
    // only ever need at most two versions of a tree. We pool the "other" unused
    // node that we're free to reuse. This is lazily created to avoid allocating
    // extra objects for things that are never updated. It also allow us to
    // reclaim the extra memory if needed.

    // 创建新的fiber
    workInProgress = createFiber(
      current.tag,
      pendingProps,
      current.key,
      current.mode,
    )

    // 复制current属性
    workInProgress.elementType = current.elementType
    workInProgress.type = current.type
    workInProgress.stateNode = current.stateNode

    {
      // DEV-only fields
      workInProgress._debugID = current._debugID
      workInProgress._debugSource = current._debugSource
      workInProgress._debugOwner = current._debugOwner
      workInProgress._debugHookTypes = current._debugHookTypes
    }

    workInProgress.alternate = current
    current.alternate = workInProgress
  } else {
    // 首次更新rootFiber时进入
    // 重置部分属性
    workInProgress.pendingProps = pendingProps // Needed because Blocks store data on type.

    workInProgress.type = current.type // We already have an alternate.
    // Reset the effect tag.

    workInProgress.flags = NoFlags // The effect list is no longer valid.

    workInProgress.nextEffect = null
    workInProgress.firstEffect = null
    workInProgress.lastEffect = null

    {
      // We intentionally reset, rather than copy, actualDuration & actualStartTime.
      // This prevents time from endlessly accumulating in new commits.
      // This has the downside of resetting values for different priority renders,
      // But works for yielding (the common case) and should support resuming.
      workInProgress.actualDuration = 0
      workInProgress.actualStartTime = -1
    }
  }

  // 复制current属性
  workInProgress.childLanes = current.childLanes
  workInProgress.lanes = current.lanes

  //  注意，child也复用，所以在子fiber未复用时，workInProgress的child指向对应current的子fiber
  workInProgress.child = current.child

  workInProgress.memoizedProps = current.memoizedProps
  workInProgress.memoizedState = current.memoizedState
  workInProgress.updateQueue = current.updateQueue // Clone the dependencies object. This is mutated during the render phase, so
  // it cannot be shared with the current fiber.

  var currentDependencies = current.dependencies
  workInProgress.dependencies =
    currentDependencies === null
      ? null
      : {
          lanes: currentDependencies.lanes,
          firstContext: currentDependencies.firstContext,
        } // These will be overridden during the parent's reconciliation

  workInProgress.sibling = current.sibling
  workInProgress.index = current.index
  workInProgress.ref = current.ref

  {
    workInProgress.selfBaseDuration = current.selfBaseDuration
    workInProgress.treeBaseDuration = current.treeBaseDuration
  }

  {
    workInProgress._debugNeedsRemount = current._debugNeedsRemount

    switch (workInProgress.tag) {
      case IndeterminateComponent:
      case FunctionComponent:
      case SimpleMemoComponent:
        workInProgress.type = resolveFunctionForHotReloading(current.type)
        break

      case ClassComponent:
        workInProgress.type = resolveClassForHotReloading(current.type)
        break

      case ForwardRef:
        workInProgress.type = resolveForwardRefForHotReloading(current.type)
        break
    }
  }

  return workInProgress
} // Used to reuse a Fiber for a second pass.
```

## beginWork()

开始工作

```js
function beginWork(current, workInProgress, renderLanes) {
  // 首次更新时，进入前createWorkInProgress()已经创建好rootFiber的workInProgress，且肯定有current，rootFiber的子fiber将由beginWork()的reconcileChildren()或者bailoutOnAlreadyFinishedWork()创建

  // 更新时，App()开始因为子标签改变要进行更新

  var updateLanes = workInProgress.lanes

  // debug相关
  {
    if (workInProgress._debugNeedsRemount && current !== null) {
      // This will restart the begin phase with a new fiber.
      return remountFiber(
        current,
        workInProgress,
        createFiberFromTypeAndProps(
          workInProgress.type,
          workInProgress.key,
          workInProgress.pendingProps,
          workInProgress._debugOwner || null,
          workInProgress.mode,
          workInProgress.lanes,
        ),
      )
    }
  }

  // 总之，有current+属性未变化+优先级足够时，或者无current时，didReceiveUpdate=false,即复用current
  if (current !== null) {
    var oldProps = current.memoizedProps
    var newProps = workInProgress.pendingProps

    // props与fiber.type改变时需要新建
    if (
      oldProps !== newProps ||
      hasContextChanged() || // Force a re-render if the implementation changed due to hot reload:
      workInProgress.type !== current.type
    ) {
      // If props or context changed, mark the fiber as having performed work.
      // This may be unset if the props are determined to be equal later (memo).
      didReceiveUpdate = true
    } else if (!includesSomeLane(renderLanes, updateLanes)) {
      // 首次更新rootFiber进入这里
      // !includesSomeLane(renderLanes, updateLanes)意味着当前fiber优先级不够，即没有需要做的工作，则不进入reconcileChildren(),在这里进入bailoutOnAlreadyFinishedWork()

      didReceiveUpdate = false // This fiber does not have any pending work. Bailout without entering
      // the begin phase. There's still some bookkeeping we that needs to be done
      // in this optimized path, mostly pushing stuff onto the stack.

      switch (workInProgress.tag) {
        case HostRoot:
          pushHostRootContext(workInProgress)
          resetHydrationState()
          break

        case HostComponent:
          pushHostContext(workInProgress)
          break

        case ClassComponent: {
          var Component = workInProgress.type

          if (isContextProvider(Component)) {
            pushContextProvider(workInProgress)
          }

          break
        }

        case HostPortal:
          pushHostContainer(
            workInProgress,
            workInProgress.stateNode.containerInfo,
          )
          break
      }
      // 部分case省略

      // 调用了createWorkInProgress创建 所有 子workInProgress fiber或复用 所有
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    } else {
      if ((current.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
        // This is a special case that only exists for legacy mode.
        // See https://github.com/facebook/react/pull/19216.
        didReceiveUpdate = true
      } else {
        // 首次更新App()进入这里，有current但是无属性变化无优先级时
        // An update was scheduled on this fiber, but there are no new props
        // nor legacy context. Set this to false. If an update queue or context
        // consumer produces a changed value, it will set this to true. Otherwise,
        // the component will assume the children have not changed and bail out.
        didReceiveUpdate = false
      }
    }
  } else {
    didReceiveUpdate = false
  } // Before entering the begin phase, clear pending update priority.
  // TODO: This assumes that we're about to evaluate the component and process
  // the update queue. However, there's an exception: SimpleMemoComponent
  // sometimes bails out later in the begin phase. This indicates that we should
  // move this assignment out of the common path and into each branch.

  workInProgress.lanes = NoLanes

  // 根据workInProgress.tag调用不同的函数，更新App()时为FunctionComponent
  switch (workInProgress.tag) {
    case IndeterminateComponent: {
      return mountIndeterminateComponent(
        current,
        workInProgress,
        workInProgress.type,
        renderLanes,
      )
    }
    // App()进入
    case FunctionComponent: {
      var _Component = workInProgress.type
      var unresolvedProps = workInProgress.pendingProps
      var resolvedProps =
        workInProgress.elementType === _Component
          ? unresolvedProps
          : resolveDefaultProps(_Component, unresolvedProps)
      return updateFunctionComponent(
        current,
        workInProgress,
        _Component,
        resolvedProps,
        renderLanes,
      )
    }

    case HostRoot:
      return updateHostRoot(current, workInProgress, renderLanes)

    case HostComponent:
      return updateHostComponent(current, workInProgress, renderLanes)

    case HostText:
      return updateHostText(current, workInProgress)
  }
  // 部分case和error省略
}
```

## bailoutOnAlreadyFinishedWork

复用已经不需要新建的 fiber

```js
function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
  if (current !== null) {
    // Reuse previous dependencies
    workInProgress.dependencies = current.dependencies
  }

  {
    // Don't update "base" render times for bailouts.
    stopProfilerTimerIfRunning()
  }

  markSkippedUpdateLanes(workInProgress.lanes) // Check if the children have any pending work.

  if (!includesSomeLane(renderLanes, workInProgress.childLanes)) {
    // The children don't have any work either. We can skip them.
    // TODO: Once we add back resuming, we should check if the children are
    // a work-in-progress set. If so, we need to transfer their effects.
    return null
  } else {
    // This fiber doesn't have work, but its subtree does. Clone the child
    // fibers and continue.

    // 复制需要更新的 所有 子fiber
    cloneChildFibers(current, workInProgress)
    return workInProgress.child
  }
}
```

### cloneChildFibers

```js
function cloneChildFibers(current, workInProgress) {
  if (!(current === null || workInProgress.child === current.child)) {
    {
      throw Error('Resuming work not yet implemented.')
    }
  }

  if (workInProgress.child === null) {
    return
  }

  var currentChild = workInProgress.child

  // 创建子workInProgress fiber
  var newChild = createWorkInProgress(currentChild, currentChild.pendingProps)
  workInProgress.child = newChild
  newChild.return = workInProgress

  // 子fiber的所有兄弟节点都要创建
  while (currentChild.sibling !== null) {
    currentChild = currentChild.sibling
    newChild = newChild.sibling = createWorkInProgress(
      currentChild,
      currentChild.pendingProps,
    )
    newChild.return = workInProgress
  }

  newChild.sibling = null
} // Reset a workInProgress child set to prepare it for a second pass.
```

## updateFunctionComponent

```js
function updateFunctionComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes,
) {
  {
    if (workInProgress.type !== workInProgress.elementType) {
      // Lazy component props can't be validated in createElement
      // because they're only guaranteed to be resolved here.
      var innerPropTypes = Component.propTypes

      if (innerPropTypes) {
        checkPropTypes(
          innerPropTypes,
          nextProps, // Resolved props
          'prop',
          getComponentName(Component),
        )
      }
    }
  }

  var context

  {
    var unmaskedContext = getUnmaskedContext(workInProgress, Component, true)
    context = getMaskedContext(workInProgress, unmaskedContext)
  }

  var nextChildren
  prepareToReadContext(workInProgress, renderLanes)

  {
    ReactCurrentOwner$1.current = workInProgress
    setIsRendering(true)
    // 返回jsx编译成的react element树
    nextChildren = renderWithHooks(
      current,
      workInProgress,
      Component,
      nextProps,
      context,
      renderLanes,
    )

    if (workInProgress.mode & StrictMode) {
      disableLogs()

      try {
        nextChildren = renderWithHooks(
          current,
          workInProgress,
          Component,
          nextProps,
          context,
          renderLanes,
        )
      } finally {
        reenableLogs()
      }
    }

    setIsRendering(false)
  }

  if (current !== null && !didReceiveUpdate) {
    bailoutHooks(current, workInProgress, renderLanes)
    return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
  } // React DevTools reads this flag.

  workInProgress.flags |= PerformedWork

  // 根据current和nextChildren(react element树)创建子fiber
  reconcileChildren(current, workInProgress, nextChildren, renderLanes)
  return workInProgress.child
}
```

### reconcileChildren()

协调（创建）子节点

```js
function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
  if (current === null) {
    // If this is a fresh new component that hasn't been rendered yet, we
    // won't update its child set by applying minimal side-effects. Instead,
    // we will add them all to the child before it gets rendered. That means
    // we can optimize this reconciliation pass by not tracking side-effects.

    // mountChildFibers不进行子fiber标记
    workInProgress.child = mountChildFibers(
      workInProgress,
      null,
      nextChildren,
      renderLanes,
    )
  } else {
    // If the current child is the same as the work in progress, it means that
    // we haven't yet started any work on these children. Therefore, we use
    // the clone algorithm to create a copy of all the current children.
    // If we had any progressed work already, that is invalid at this point so
    // let's throw it out.

    // 首次更新App()进入此处，因为更新有current所有都进入此处

    // reconcileChildFibers进行子fiber点标记，不标记就无法更新，但是rootFiber有current，所以rootFiber根据标记mount就行
    workInProgress.child = reconcileChildFibers(
      workInProgress,
      current.child,
      nextChildren,
      renderLanes,
    )
  }
}
```

#### ChildReconciler()

```js
// 根据传入的参数来判断是否进行标记
var reconcileChildFibers = ChildReconciler(true)
var mountChildFibers = ChildReconciler(false)

// 函数内函数很多，直接进入最后一个reconcileChildFibers()，与上方同名但是不同内容
function ChildReconciler(shouldTrackSideEffects) {
  // 需要删除子fiber时
  function deleteChild(returnFiber, childToDelete) {
    if (!shouldTrackSideEffects) {
      // Noop.
      return
    } // Deletions are added in reversed order so we add it to the front.
    // At this point, the return fiber's effect list is empty except for
    // deletions, so we can just append the deletion to the list. The remaining
    // effects aren't added until the complete phase. Once we implement
    // resuming, this may not be true.

    var last = returnFiber.lastEffect

    if (last !== null) {
      last.nextEffect = childToDelete
      returnFiber.lastEffect = childToDelete
    } else {
      returnFiber.firstEffect = returnFiber.lastEffect = childToDelete
    }

    // 追踪副作用则做标记
    childToDelete.nextEffect = null
    childToDelete.flags = Deletion
  }

  // 需要插入子fiber时
  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex

    if (!shouldTrackSideEffects) {
      // Noop.
      return lastPlacedIndex
    }

    var current = newFiber.alternate

    if (current !== null) {
      var oldIndex = current.index

      if (oldIndex < lastPlacedIndex) {
        // This is a move.
        // 追踪副作用则做标记
        newFiber.flags = Placement
        return lastPlacedIndex
      } else {
        // This item can stay in place.
        return oldIndex
      }
    } else {
      // This is an insertion.
      newFiber.flags = Placement
      return lastPlacedIndex
    }
  }

  // 首次mount时，只在mountrootFiber时标记子fiberApp()
  // 首次更新App()时，shouldTrackSideEffects为true但是newFiber.alternate即App对应的current存在，所以不会标记
  // 仅在新增标签时标记
  function placeSingleChild(newFiber) {
    // This is simpler for the single child case. We only need to do a
    // placement for inserting new children.
    if (shouldTrackSideEffects && newFiber.alternate === null) {
      newFiber.flags = Placement
    }

    return newFiber
  }

  // 创建一个标签的fiber并返回，更新时会调用createWorkInProgress
  function reconcileSingleElement(
    returnFiber,
    currentFirstChild,
    element,
    lanes,
  ) {
    // returnFiber为当前fiber，element为第一个子节点的react element
    var key = element.key
    var child = currentFirstChild

    // 判断child是否存在，mountdiv时不存在
    while (child !== null) {
      // TODO: If key === null and child.key === null, then this only applies to
      // the first item in the list.
      if (child.key === key) {
        switch (child.tag) {
          case Fragment: {
            if (element.type === REACT_FRAGMENT_TYPE) {
              deleteRemainingChildren(returnFiber, child.sibling)
              var existing = useFiber(child, element.props.children)
              existing.return = returnFiber

              {
                existing._debugSource = element._source
                existing._debugOwner = element._owner
              }

              return existing
            }

            break
          }

          case Block: {
            var type = element.type

            if (type.$$typeof === REACT_LAZY_TYPE) {
              type = resolveLazyType(type)
            }

            if (type.$$typeof === REACT_BLOCK_TYPE) {
              // The new Block might not be initialized yet. We need to initialize
              // it in case initializing it turns out it would match.
              if (type._render === child.type._render) {
                deleteRemainingChildren(returnFiber, child.sibling)

                var _existing2 = useFiber(child, element.props)

                _existing2.type = type
                _existing2.return = returnFiber

                {
                  _existing2._debugSource = element._source
                  _existing2._debugOwner = element._owner
                }

                return _existing2
              }
            }
          }

          // We intentionally fallthrough here if enableBlocksAPI is not on.
          // eslint-disable-next-lined no-fallthrough

          default: {
            if (
              child.elementType === element.type || // Keep this check inline so it only runs on the false path:
              isCompatibleFamilyForHotReloading(child, element)
            ) {
              deleteRemainingChildren(returnFiber, child.sibling)

              var _existing3 = useFiber(child, element.props)

              _existing3.ref = coerceRef(returnFiber, child, element)
              _existing3.return = returnFiber

              {
                _existing3._debugSource = element._source
                _existing3._debugOwner = element._owner
              }

              return _existing3
            }

            break
          }
        } // Didn't match.

        deleteRemainingChildren(returnFiber, child)
        break
      } else {
        deleteChild(returnFiber, child)
      }

      child = child.sibling
    }

    // 根据 子节点 类型选择创建fiber函数
    if (element.type === REACT_FRAGMENT_TYPE) {
      var created = createFiberFromFragment(
        element.props.children,
        returnFiber.mode,
        lanes,
        element.key,
      )
      created.return = returnFiber
      return created
    } else {
      // mountdiv时进入此处
      var _created4 = createFiberFromElement(element, returnFiber.mode, lanes)

      _created4.ref = coerceRef(returnFiber, currentFirstChild, element)
      _created4.return = returnFiber
      return _created4
    }
  }

  // 创建一个文本标签的fiber
  function reconcileSingleTextNode(
    returnFiber,
    currentFirstChild,
    textContent,
    lanes,
  ) {
    // There's no need to check for keys on text nodes since we don't have a
    // way to define them.
    if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
      // We already have an existing node so let's just update it and delete
      // the rest.
      deleteRemainingChildren(returnFiber, currentFirstChild.sibling)
      var existing = useFiber(currentFirstChild, textContent)
      existing.return = returnFiber
      return existing
    } // The existing first child is not a text node so we need to create one
    // and delete the existing ones.

    deleteRemainingChildren(returnFiber, currentFirstChild)
    var created = createFiberFromText(textContent, returnFiber.mode, lanes)
    created.return = returnFiber
    return created
  }

  // 名字是Array但是也是只创建一个fiber
  function reconcileChildrenArray(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes,
  ) {
    // This algorithm can't optimize by searching from both ends since we
    // don't have backpointers on fibers. I'm trying to see how far we can get
    // with that model. If it ends up not being worth the tradeoffs, we can
    // add it later.
    // Even with a two ended optimization, we'd want to optimize for the case
    // where there are few changes and brute force the comparison instead of
    // going for the Map. It'd like to explore hitting that path first in
    // forward-only mode and only go for the Map once we notice that we need
    // lots of look ahead. This doesn't handle reversal as well as two ended
    // search but that's unusual. Besides, for the two ended optimization to
    // work on Iterables, we'd need to copy the whole set.
    // In this first iteration, we'll just live with hitting the bad case
    // (adding everything to a Map) in for every insert/move.
    // If you change this code, also update reconcileChildrenIterator() which
    // uses the same algorithm.
    {
      // First, validate keys.
      var knownKeys = null

      for (var i = 0; i < newChildren.length; i++) {
        var child = newChildren[i]
        knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber)
      }
    }

    var resultingFirstChild = null
    var previousNewFiber = null
    var oldFiber = currentFirstChild
    var lastPlacedIndex = 0
    var newIdx = 0
    var nextOldFiber = null

    for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
      if (oldFiber.index > newIdx) {
        nextOldFiber = oldFiber
        oldFiber = null
      } else {
        nextOldFiber = oldFiber.sibling
      }

      var newFiber = updateSlot(
        returnFiber,
        oldFiber,
        newChildren[newIdx],
        lanes,
      )

      if (newFiber === null) {
        // TODO: This breaks on empty slots like null children. That's
        // unfortunate because it triggers the slow path all the time. We need
        // a better way to communicate whether this was a miss or null,
        // boolean, undefined, etc.
        if (oldFiber === null) {
          oldFiber = nextOldFiber
        }

        break
      }

      if (shouldTrackSideEffects) {
        if (oldFiber && newFiber.alternate === null) {
          // We matched the slot, but we didn't reuse the existing fiber, so we
          // need to delete the existing child.
          deleteChild(returnFiber, oldFiber)
        }
      }

      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx)

      if (previousNewFiber === null) {
        // TODO: Move out of the loop. This only happens for the first run.
        resultingFirstChild = newFiber
      } else {
        // TODO: Defer siblings if we're not at the right index for this slot.
        // I.e. if we had null values before, then we want to defer this
        // for each null value. However, we also don't want to call updateSlot
        // with the previous one.
        previousNewFiber.sibling = newFiber
      }

      previousNewFiber = newFiber
      oldFiber = nextOldFiber
    }

    if (newIdx === newChildren.length) {
      // We've reached the end of the new children. We can delete the rest.
      deleteRemainingChildren(returnFiber, oldFiber)
      return resultingFirstChild
    }

    if (oldFiber === null) {
      // If we don't have any more existing children we can choose a fast path
      // since the rest will all be insertions.
      for (; newIdx < newChildren.length; newIdx++) {
        var _newFiber = createChild(returnFiber, newChildren[newIdx], lanes)

        if (_newFiber === null) {
          continue
        }

        lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx)

        if (previousNewFiber === null) {
          // TODO: Move out of the loop. This only happens for the first run.
          resultingFirstChild = _newFiber
        } else {
          previousNewFiber.sibling = _newFiber
        }

        previousNewFiber = _newFiber
      }

      return resultingFirstChild
    } // Add all children to a key map for quick lookups.

    var existingChildren = mapRemainingChildren(returnFiber, oldFiber) // Keep scanning and use the map to restore deleted items as moves.

    for (; newIdx < newChildren.length; newIdx++) {
      var _newFiber2 = updateFromMap(
        existingChildren,
        returnFiber,
        newIdx,
        newChildren[newIdx],
        lanes,
      )

      if (_newFiber2 !== null) {
        if (shouldTrackSideEffects) {
          if (_newFiber2.alternate !== null) {
            // The new fiber is a work in progress, but if there exists a
            // current, that means that we reused the fiber. We need to delete
            // it from the child list so that we don't add it to the deletion
            // list.
            existingChildren.delete(
              _newFiber2.key === null ? newIdx : _newFiber2.key,
            )
          }
        }

        lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx)

        if (previousNewFiber === null) {
          resultingFirstChild = _newFiber2
        } else {
          previousNewFiber.sibling = _newFiber2
        }

        previousNewFiber = _newFiber2
      }
    }

    if (shouldTrackSideEffects) {
      // Any existing children that weren't consumed above were deleted. We need
      // to add them to the deletion list.
      existingChildren.forEach(function (child) {
        return deleteChild(returnFiber, child)
      })
    }

    return resultingFirstChild
  }

  // 省略部分函数

  // This API will tag the children with the side-effect of the reconciliation
  // itself. They will be added to the side-effect list as we pass through the
  // children and the parent.

  function reconcileChildFibers(
    returnFiber,
    currentFirstChild,
    newChild,
    lanes,
  ) {
    // This function is not recursive.
    // If the top level item is an array, we treat it as a set of children,
    // not as a fragment. Nested arrays on the other hand will be treated as
    // fragment nodes. Recursion happens at the normal flow.
    // Handle top level unkeyed fragments as if they were arrays.
    // This leads to an ambiguity between <>{[...]}</> and <>...</>.
    // We treat the ambiguous cases above the same.

    // 判断child类型，选择对应的创建函数
    var isUnkeyedTopLevelFragment =
      typeof newChild === 'object' &&
      newChild !== null &&
      newChild.type === REACT_FRAGMENT_TYPE &&
      newChild.key === null

    if (isUnkeyedTopLevelFragment) {
      newChild = newChild.props.children
    } // Handle object types

    var isObject = typeof newChild === 'object' && newChild !== null

    if (isObject) {
      switch (
        newChild.$$typeof // 判断$$typeof，首次更新App()时进入此处
      ) {
        case REACT_ELEMENT_TYPE:
          return placeSingleChild(
            reconcileSingleElement(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes,
            ),
          )

        case REACT_PORTAL_TYPE:
          return placeSingleChild(
            reconcileSinglePortal(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes,
            ),
          )

        case REACT_LAZY_TYPE: {
          var payload = newChild._payload
          var init = newChild._init // TODO: This function is supposed to be non-recursive.

          return reconcileChildFibers(
            returnFiber,
            currentFirstChild,
            init(payload),
            lanes,
          )
        }
      }
    }

    if (typeof newChild === 'string' || typeof newChild === 'number') {
      return placeSingleChild(
        reconcileSingleTextNode(
          returnFiber,
          currentFirstChild,
          '' + newChild,
          lanes,
        ),
      )
    }

    if (isArray$1(newChild)) {
      return reconcileChildrenArray(
        returnFiber,
        currentFirstChild,
        newChild,
        lanes,
      )
    }

    // 省略部分情况

    return deleteRemainingChildren(returnFiber, currentFirstChild)
  }

  return reconcileChildFibers
}
```
