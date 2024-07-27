# loadash 手写

## keyBy

```ts
export function keyBy<T, K extends keyof T>(arr: T[], key: K) {
  return arr.reduce((pre, cur) => {
    const itemKey = cur[key];

    if (typeof itemKey === "string" || typeof itemKey === "number") {
      pre[itemKey as string | number] = cur;
    }

    return pre;
  }, {} as Record<string, T>);
}
```

### mapKeys

```ts

```

### merge
