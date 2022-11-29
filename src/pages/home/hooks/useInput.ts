import Inputs from 'common/store/inputs';
import { Prop } from 'common/store/types';

export const useInput = (prop: Prop) => {
  const { onChange } = Inputs;

  const setValue = (val: string) => {
    onChange(prop, val);
  };

  const resetValue = () => {
    onChange(prop, '');
  };

  const setHelloWorld = () => {
    onChange(prop, 'Hello world!');
  };

  return {
    value: Inputs[prop],
    setValue,
    resetValue,
    setHelloWorld
  };
};
