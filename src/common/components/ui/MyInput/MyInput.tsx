import { FC, HTMLAttributes } from 'react';
import styles from './MyInput.module.scss';

interface Props extends HTMLAttributes<HTMLInputElement> {}

const MyInput: FC<Props> = ({ ...rest }) => {
  return <input className={styles.wrap} type='text' {...rest} />;
};

export { MyInput };
