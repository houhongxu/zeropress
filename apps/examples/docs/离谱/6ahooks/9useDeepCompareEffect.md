# useDeepCompareEffect

## useDeepEffect

```ts
function isDeepEqual(cur: any, pre: any) {
  return true;
}

function useDeepEffect(fn: any, deps: any) {
  const flag = useRef(0);
  const preDeps = useRef<any>();

  if (!isDeepEqual(deps, preDeps.current)) {
    flag.current += 1;
  }

  preDeps.current = deps;

  useEffect(fn, [flag.current]);
}
```
