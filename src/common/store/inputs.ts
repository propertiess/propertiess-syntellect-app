import { action, makeObservable, observable } from 'mobx';
import { IInputs, Prop } from './types';

class Inputs {
  inputs: IInputs = {
    first: '',
    second: '',
    third: '',
    fourty: ''
  };

  constructor() {
    makeObservable(this, {
      inputs: observable,
      onChange: action.bound
    });
  }

  onChange(prop: Prop, value: string) {
    this.inputs[prop] = value;
  }
}

export default new Inputs();
