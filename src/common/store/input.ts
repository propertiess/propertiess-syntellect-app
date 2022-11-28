import { makeAutoObservable } from 'mobx';

class Input {
  value = '';

  constructor() {
    makeAutoObservable(this);
  }

  onChange(value: string) {
    this.value = value;
  }
}

export default Input;
