import { useEffect, useRef } from "react";

export function useSiblingIndex<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (CSS.supports("animation-delay: calc(sibling-index() * 1s)")) return;
    const el = ref.current;
    if (!el?.parentElement) return;
    const index = Array.from(el.parentElement.children).indexOf(el);
    el.style.setProperty("--sibling-index", String(index));
  }, []);

  return ref;
}
