import { Prop } from 'common/store/types';

export interface IAutoComplete {
  prop: Prop;
  countOfPrompts: number;
}

export interface IButtons {
  title: string;
  callback: () => void;
}
