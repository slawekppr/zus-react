import { useEffect } from "react";

export function useDebounce(
  fn: () => void,
  deps?: React.DependencyList,
  time = 500
) {
  useEffect(() => {
    const handler = setTimeout(fn, time);

    return () => clearTimeout(handler);
  }, deps);
}
