# 流程

```js
function commitRoot(root) {
  var renderPriorityLevel = getCurrentPriorityLevel()
  runWithPriority$1(
    ImmediatePriority$1,
    commitRootImpl.bind(null, root, renderPriorityLevel),
  )
  return null
}
```

```js
function commitRootImpl(root, renderPriorityLevel) {
  do {
    // `flushPassiveEffects` will call `flushSyncUpdateQueue` at the end, which
    // means `flushPassiveEffects` will sometimes result in additional
    // passive effects. So we need to keep flushing in a loop until there are
    // no more pending effects.
    // TODO: Might be better if `flushPassiveEffects` did not automatically
    // flush synchronous work at the end, to avoid factoring hazards like this.
    flushPassiveEffects()
  } while (rootWithPendingPassiveEffects !== null)

  flushRenderPhaseStrictModeWarningsInDEV()

  if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
    {
      throw Error('Should not already be working.')
    }
  }

  var finishedWork = root.finishedWork
  var lanes = root.finishedLanes

  {
    markCommitStarted(lanes)
  }

  if (finishedWork === null) {
    {
      markCommitStopped()
    }

    return null
  }

  root.finishedWork = null
  root.finishedLanes = NoLanes

  if (!(finishedWork !== root.current)) {
    {
      throw Error(
        'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.',
      )
    }
  } // commitRoot never returns a continuation; it always finishes synchronously.
  // So we can clear these now to allow a new callback to be scheduled.

  root.callbackNode = null // Update the first and last pending times on this root. The new first
  // pending time is whatever is left on the root fiber.

  var remainingLanes = mergeLanes(finishedWork.lanes, finishedWork.childLanes)
  markRootFinished(root, remainingLanes) // Clear already finished discrete updates in case that a later call of
  // `flushDiscreteUpdates` starts a useless render pass which may cancels
  // a scheduled timeout.

  if (rootsWithPendingDiscreteUpdates !== null) {
    if (
      !hasDiscreteLanes(remainingLanes) &&
      rootsWithPendingDiscreteUpdates.has(root)
    ) {
      rootsWithPendingDiscreteUpdates.delete(root)
    }
  }

  if (root === workInProgressRoot) {
    // We can reset these now that they are finished.
    workInProgressRoot = null
    workInProgress = null
    workInProgressRootRenderLanes = NoLanes
  } // Get the list of effects.

  var firstEffect

  if (finishedWork.flags > PerformedWork) {
    // A fiber's effect list consists only of its children, not itself. So if
    // the root has an effect, we need to add it to the end of the list. The
    // resulting list is the set that would belong to the root's parent, if it
    // had one; that is, all the effects in the tree including the root.
    if (finishedWork.lastEffect !== null) {
      finishedWork.lastEffect.nextEffect = finishedWork
      firstEffect = finishedWork.firstEffect
    } else {
      firstEffect = finishedWork
    }
  } else {
    // There is no effect on the root.
    firstEffect = finishedWork.firstEffect
  }

  if (firstEffect !== null) {
    var prevExecutionContext = executionContext
    executionContext |= CommitContext
    var prevInteractions = pushInteractions(root) // Reset this to null before calling lifecycles

    ReactCurrentOwner$2.current = null // The commit phase is broken into several sub-phases. We do a separate pass
    // of the effect list for each phase: all mutation effects come before all
    // layout effects, and so on.
    // The first phase a "before mutation" phase. We use this phase to read the
    // state of the host tree right before we mutate it. This is where
    // getSnapshotBeforeUpdate is called.

    focusedInstanceHandle = prepareForCommit(root.containerInfo)
    shouldFireAfterActiveInstanceBlur = false
    nextEffect = firstEffect

    do {
      {
        invokeGuardedCallback(null, commitBeforeMutationEffects, null)

        if (hasCaughtError()) {
          if (!(nextEffect !== null)) {
            {
              throw Error('Should be working on an effect.')
            }
          }

          var error = clearCaughtError()
          captureCommitPhaseError(nextEffect, error)
          nextEffect = nextEffect.nextEffect
        }
      }
    } while (nextEffect !== null) // We no longer need to track the active instance fiber

    focusedInstanceHandle = null

    {
      // Mark the current commit time to be shared by all Profilers in this
      // batch. This enables them to be grouped later.
      recordCommitTime()
    } // The next phase is the mutation phase, where we mutate the host tree.

    nextEffect = firstEffect

    do {
      {
        invokeGuardedCallback(
          null,
          commitMutationEffects,
          null,
          root,
          renderPriorityLevel,
        )

        if (hasCaughtError()) {
          if (!(nextEffect !== null)) {
            {
              throw Error('Should be working on an effect.')
            }
          }

          var _error = clearCaughtError()

          captureCommitPhaseError(nextEffect, _error)
          nextEffect = nextEffect.nextEffect
        }
      }
    } while (nextEffect !== null)

    resetAfterCommit(root.containerInfo) // The work-in-progress tree is now the current tree. This must come after
    // the mutation phase, so that the previous tree is still current during
    // componentWillUnmount, but before the layout phase, so that the finished
    // work is current during componentDidMount/Update.

    root.current = finishedWork // The next phase is the layout phase, where we call effects that read
    // the host tree after it's been mutated. The idiomatic use case for this is
    // layout, but class component lifecycles also fire here for legacy reasons.

    nextEffect = firstEffect

    do {
      {
        invokeGuardedCallback(null, commitLayoutEffects, null, root, lanes)

        if (hasCaughtError()) {
          if (!(nextEffect !== null)) {
            {
              throw Error('Should be working on an effect.')
            }
          }

          var _error2 = clearCaughtError()

          captureCommitPhaseError(nextEffect, _error2)
          nextEffect = nextEffect.nextEffect
        }
      }
    } while (nextEffect !== null)

    nextEffect = null // Tell Scheduler to yield at the end of the frame, so the browser has an
    // opportunity to paint.

    requestPaint()

    {
      popInteractions(prevInteractions)
    }

    executionContext = prevExecutionContext
  } else {
    // No effects.
    root.current = finishedWork // Measure these anyway so the flamegraph explicitly shows that there were
    // no effects.
    // TODO: Maybe there's a better way to report this.

    {
      recordCommitTime()
    }
  }

  var rootDidHavePassiveEffects = rootDoesHavePassiveEffects

  if (rootDoesHavePassiveEffects) {
    // This commit has passive effects. Stash a reference to them. But don't
    // schedule a callback until after flushing layout work.
    rootDoesHavePassiveEffects = false
    rootWithPendingPassiveEffects = root
    pendingPassiveEffectsLanes = lanes
    pendingPassiveEffectsRenderPriority = renderPriorityLevel
  } else {
    // We are done with the effect chain at this point so let's clear the
    // nextEffect pointers to assist with GC. If we have passive effects, we'll
    // clear this in flushPassiveEffects.
    nextEffect = firstEffect

    while (nextEffect !== null) {
      var nextNextEffect = nextEffect.nextEffect
      nextEffect.nextEffect = null

      if (nextEffect.flags & Deletion) {
        detachFiberAfterEffects(nextEffect)
      }

      nextEffect = nextNextEffect
    }
  } // Read this again, since an effect might have updated it

  remainingLanes = root.pendingLanes // Check if there's remaining work on this root

  if (remainingLanes !== NoLanes) {
    {
      if (spawnedWorkDuringRender !== null) {
        var expirationTimes = spawnedWorkDuringRender
        spawnedWorkDuringRender = null

        for (var i = 0; i < expirationTimes.length; i++) {
          scheduleInteractions(
            root,
            expirationTimes[i],
            root.memoizedInteractions,
          )
        }
      }

      schedulePendingInteractions(root, remainingLanes)
    }
  } else {
    // If there's no remaining work, we can clear the set of already failed
    // error boundaries.
    legacyErrorBoundariesThatAlreadyFailed = null
  }

  {
    if (!rootDidHavePassiveEffects) {
      // If there are no passive effects, then we can complete the pending interactions.
      // Otherwise, we'll wait until after the passive effects are flushed.
      // Wait to do this until after remaining work has been scheduled,
      // so that we don't prematurely signal complete for interactions when there's e.g. hidden work.
      finishPendingInteractions(root, lanes)
    }
  }

  if (remainingLanes === SyncLane) {
    // Count the number of times the root synchronously re-renders without
    // finishing. If there are too many, it indicates an infinite update loop.
    if (root === rootWithNestedUpdates) {
      nestedUpdateCount++
    } else {
      nestedUpdateCount = 0
      rootWithNestedUpdates = root
    }
  } else {
    nestedUpdateCount = 0
  }

  onCommitRoot(finishedWork.stateNode, renderPriorityLevel)

  {
    onCommitRoot$1()
  } // Always call this before exiting `commitRoot`, to ensure that any
  // additional work on this root is scheduled.

  ensureRootIsScheduled(root, now())

  if (hasUncaughtError) {
    hasUncaughtError = false
    var _error3 = firstUncaughtError
    firstUncaughtError = null
    throw _error3
  }

  if ((executionContext & LegacyUnbatchedContext) !== NoContext) {
    {
      markCommitStopped()
    } // This is a legacy edge case. We just committed the initial mount of
    // a ReactDOM.render-ed root inside of batchedUpdates. The commit fired
    // synchronously, but layout updates should be deferred until the end
    // of the batch.

    return null
  } // If layout work was scheduled, flush it now.

  flushSyncCallbackQueue()

  {
    markCommitStopped()
  }

  return null
}
```

##

```js

```
