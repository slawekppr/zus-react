import { useRef, useEffect } from "react";

export function useFocus() {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return { ref: ref };
}
