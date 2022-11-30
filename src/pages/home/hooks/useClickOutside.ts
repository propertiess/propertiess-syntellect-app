import { useEffect, useRef } from 'react';

export const useClickOutside = (callback: () => void, trigger: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trigger) return;

    const handler = (e: Event) => {
      if (!ref.current) return;

      if (ref.current.contains(e.target as Node)) return;

      callback();
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [trigger]);

  return ref;
};
