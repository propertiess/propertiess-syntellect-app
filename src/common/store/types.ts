import Inputs from './inputs';

export type Prop = Exclude<keyof Omit<typeof Inputs, 'onChange'>, ''>;
