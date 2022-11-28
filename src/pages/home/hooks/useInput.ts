import { useEffect, useState } from 'react';
import Input from 'common/store/input';

export const useInput = () => {
  const [value, setValue] = useState<Input>();

  useEffect(() => {
    setValue(new Input());
  }, []);

  const onChange = (val: string) => {
    value?.onChange(val);
  };

  const resetValue = () => {
    value?.onChange('');
  };

  const setHelloWorld = () => {
    value?.onChange('Hello world!');
  };

  return {
    value: value?.value,
    onChange,
    resetValue,
    setHelloWorld
  };
};
