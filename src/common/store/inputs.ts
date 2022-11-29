import { action, makeObservable, observable } from 'mobx';
import { Prop } from './types';

class Inputs {
  first = '';
  second = '';
  third = '';
  fourth = '';

  constructor() {
    makeObservable(this, {
      first: observable,
      second: observable,
      third: observable,
      fourth: observable,
      onChange: action.bound
    });
  }

  onChange(prop: Prop, value: string) {
    this[prop] = value;
  }
}

export default new Inputs();
