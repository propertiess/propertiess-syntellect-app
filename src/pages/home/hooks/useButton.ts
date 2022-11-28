import { useEffect, useRef, useState } from 'react';

export const useButton = () => {
  const [error, setError] = useState<Error | null>(null);
  const timerId = useRef<NodeJS.Timeout>();

  const alertMessage = (value: string) => {
    if (!value.trim()) {
      setError(new Error('Поле ввода пустое!'));
      return;
    }

    alert(value);
  };

  const alertNumber = (value: string) => {
    if (!value.trim() || isNaN(+value)) {
      setError(new Error('Поле ввода пустое или не является числом!'));
      return;
    }

    alert(value);
  };

  useEffect(() => {
    if (!error) return;

    timerId.current = setTimeout(() => {
      setError(null);
    }, 5 * 1000);

    return () => {
      clearTimeout(timerId.current);
    };
  }, [error]);

  return {
    alertMessage,
    alertNumber,
    error
  };
};
