import { FC } from 'react';
import styles from './MyInput.module.scss';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: FC<Props> = props => {
  return <input className={styles.wrap} type='text' {...props} />;
};

export { MyInput };
