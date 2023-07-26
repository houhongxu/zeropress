# 进入 commit()阶段

执行完 render()阶段后，将回到 performSyncWorkOnRoot，执行底部的 commitRoot()

```js
function performSyncWorkOnRoot(root) {
  if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
    {
      throw Error('Should not already be working.')
    }
  }

  flushPassiveEffects()
  var lanes
  var exitStatus

  if (
    root === workInProgressRoot &&
    includesSomeLane(root.expiredLanes, workInProgressRootRenderLanes)
  ) {
    // There's a partial tree, and at least one of its lanes has expired. Finish
    // rendering it before rendering the rest of the expired work.
    lanes = workInProgressRootRenderLanes
    exitStatus = renderRootSync(root, lanes)

    if (
      includesSomeLane(
        workInProgressRootIncludedLanes,
        workInProgressRootUpdatedLanes,
      )
    ) {
      // The render included lanes that were updated during the render phase.
      // For example, when unhiding a hidden tree, we include all the lanes
      // that were previously skipped when the tree was hidden. That set of
      // lanes is a superset of the lanes we started rendering with.
      //
      // Note that this only happens when part of the tree is rendered
      // concurrently. If the whole tree is rendered synchronously, then there
      // are no interleaved events.
      lanes = getNextLanes(root, lanes)
      exitStatus = renderRootSync(root, lanes)
    }
  } else {
    lanes = getNextLanes(root, NoLanes)
    exitStatus = renderRootSync(root, lanes)
  }

  if (root.tag !== LegacyRoot && exitStatus === RootErrored) {
    executionContext |= RetryAfterError // If an error occurred during hydration,
    // discard server response and fall back to client side render.

    if (root.hydrate) {
      root.hydrate = false
      clearContainer(root.containerInfo)
    } // If something threw an error, try rendering one more time. We'll render
    // synchronously to block concurrent data mutations, and we'll includes
    // all pending updates are included. If it still fails after the second
    // attempt, we'll give up and commit the resulting tree.

    lanes = getLanesToRetrySynchronouslyOnError(root)

    if (lanes !== NoLanes) {
      exitStatus = renderRootSync(root, lanes)
    }
  }

  if (exitStatus === RootFatalErrored) {
    var fatalError = workInProgressRootFatalError
    prepareFreshStack(root, NoLanes)
    markRootSuspended$1(root, lanes)
    ensureRootIsScheduled(root, now())
    throw fatalError
  } // We now have a consistent tree. Because this is a sync render, we
  // will commit it even if something suspended.

  var finishedWork = root.current.alternate
  root.finishedWork = finishedWork
  root.finishedLanes = lanes

  // 进入commit()阶段
  commitRoot(root) // Before exiting, make sure there's a callback scheduled for the next
  // pending level.

  ensureRootIsScheduled(root, now())
  return null
}
```

## completeUnitOfWork

执行 render()阶段时，会将标记了 flags 的节点用链表链接

```js
function completeUnitOfWork(unitOfWork) {
  // Attempt to complete the current unit of work, then move to the next
  // sibling. If there are no more siblings, return to the parent fiber.
  var completedWork = unitOfWork

  do {
    // The current, flushed, state of this fiber is the alternate. Ideally
    // nothing should rely on this, but relying on it here means that we don't
    // need an additional field on the work in progress.
    var current = completedWork.alternate
    var returnFiber = completedWork.return // Check if the work completed or if something threw.

    if ((completedWork.flags & Incomplete) === NoFlags) {
      setCurrentFiber(completedWork)
      var next = void 0

      if ((completedWork.mode & ProfileMode) === NoMode) {
        next = completeWork(current, completedWork, subtreeRenderLanes)
      } else {
        startProfilerTimer(completedWork)
        next = completeWork(current, completedWork, subtreeRenderLanes) // Update render duration assuming we didn't error.

        stopProfilerTimerIfRunningAndRecordDelta(completedWork, false)
      }

      resetCurrentFiber()

      if (next !== null) {
        // Completing this fiber spawned new work. Work on that next.
        workInProgress = next
        return
      }

      resetChildLanes(completedWork)

      // ---

      // 根的firstEffect指向第一个含effectTag的节点
      // 含effectTag的节点的nextEffect指向最后一个
      // 根的lastEffect指向最后含effectTag的节点

      // completeWork为当前fiber
      // 假设
      // <header>
      //    <p><code></code></p>
      //    <a></a>
      // </header>
      // code在completeWork阶段时,returnFiber为p
      // 当code的兄弟节点报错时，p会被标记Incomplete，按位&则会有1，不等于NoFlags
      if (
        returnFiber !== null && // Do not append effects to parents if a sibling failed to complete
        (returnFiber.flags & Incomplete) === NoFlags
      ) {
        // p存在且子节点未报错时

        // Append all the effects of the subtree and this fiber onto the effect
        // list of the parent. The completion order of the children affects the
        // side-effect order.

        // p.firstEffect=null,header.firstEffect=code,div.firstEffect=code
        if (returnFiber.firstEffect === null) {
          returnFiber.firstEffect = completedWork.firstEffect
        }

        // header.lastEffect=code,div.lastEffect=p
        if (completedWork.lastEffect !== null) {
          if (returnFiber.lastEffect !== null) {
            returnFiber.lastEffect.nextEffect = completedWork.firstEffect
          }

          returnFiber.lastEffect = completedWork.lastEffect
        } // If this fiber had side-effects, we append it AFTER the children's
        // side-effects. We can perform certain side-effects earlier if needed,
        // by doing multiple passes over the effect list. We don't want to
        // schedule our own side-effect on our own list because if end up
        // reusing children we'll schedule this effect onto itself since we're
        // at the end.

        var flags = completedWork.flags // Skip both NoWork and PerformedWork tags when creating the effect
        // list. PerformedWork effect is read by React DevTools but shouldn't be
        // committed.

        // 是否有标记
        if (flags > PerformedWork) {
          // p.lastEffect是否存在
          if (returnFiber.lastEffect !== null) {
            // 注意 这里是NEXTEffect
            // header.lastEffect.nextEffect(code)=p
            returnFiber.lastEffect.nextEffect = completedWork
          } else {
            // p.firstEffect赋值为code
            returnFiber.firstEffect = completedWork
          }

          // p.lastEffect赋值为code,header.lastEffect=p
          returnFiber.lastEffect = completedWork
        }
        // 之后进入p,a(无flags跳过),header,div
      }
    } else {
      // This fiber did not complete because something threw. Pop values off
      // the stack without entering the complete phase. If this is a boundary,
      // capture values if possible.
      var _next = unwindWork(completedWork) // Because this fiber did not complete, don't reset its expiration time.

      if (_next !== null) {
        // If completing this work spawned new work, do that next. We'll come
        // back here again.
        // Since we're restarting, remove anything that is not a host effect
        // from the effect tag.
        _next.flags &= HostEffectMask
        workInProgress = _next
        return
      }

      if ((completedWork.mode & ProfileMode) !== NoMode) {
        // Record the render duration for the fiber that errored.
        stopProfilerTimerIfRunningAndRecordDelta(completedWork, false) // Include the time spent working on failed children before continuing.

        var actualDuration = completedWork.actualDuration
        var child = completedWork.child

        while (child !== null) {
          actualDuration += child.actualDuration
          child = child.sibling
        }

        completedWork.actualDuration = actualDuration
      }

      if (returnFiber !== null) {
        // Mark the parent fiber as incomplete and clear its effect list.
        returnFiber.firstEffect = returnFiber.lastEffect = null
        returnFiber.flags |= Incomplete
      }
    }
    // ---

    var siblingFiber = completedWork.sibling

    if (siblingFiber !== null) {
      // If there is more work to do in this returnFiber, do that next.
      workInProgress = siblingFiber
      return
    } // Otherwise, return to the parent

    completedWork = returnFiber // Update the next thing we're working on in case something throws.

    workInProgress = completedWork
  } while (completedWork !== null) // We've reached the root.

  if (workInProgressRootExitStatus === RootIncomplete) {
    workInProgressRootExitStatus = RootCompleted
  }
}
```
