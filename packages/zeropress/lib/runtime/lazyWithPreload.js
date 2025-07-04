// src/runtime/lazyWithPreload.tsx
import { forwardRef, lazy, useRef } from "react";
import { jsx } from "react/jsx-runtime";
function lazyWithPreload(factory) {
  const ReactLazyComponent = lazy(factory);
  let PreloadedComponent;
  let factoryPromise;
  const Component = forwardRef(function LazyWithPreload2(props, ref) {
    const ComponentToRender = useRef(PreloadedComponent ?? ReactLazyComponent);
    const Element = ComponentToRender.current;
    return /* @__PURE__ */ jsx(Element, { ref, ...props });
  });
  const LazyWithPreload = Component;
  LazyWithPreload.preload = () => {
    if (!factoryPromise) {
      factoryPromise = factory().then((mod) => {
        PreloadedComponent = mod.default;
        return mod;
      });
    }
    return factoryPromise;
  };
  return LazyWithPreload;
}
export {
  lazyWithPreload
};
