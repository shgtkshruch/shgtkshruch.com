import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element>(
  options: IntersectionObserverInit = {
    threshold: 0,
    rootMargin: "-50% 0px 0px 0px",
  },
) {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);
  const optionsRef = useRef(options);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, optionsRef.current);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
