import { useEffect, useRef } from "react";

export function useClickOutside(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const handleClick = ({target}: MouseEvent) => {
        // check if where the user clicked on the screen is not the ref 
        if (ref.current && !ref.current.contains(target as Node)) {
          callback();
        }
      }

      document.addEventListener("click", handleClick);

      return () =>
        document.removeEventListener("click", handleClick);
    },
    [callback]
  );

  return ref;
}
