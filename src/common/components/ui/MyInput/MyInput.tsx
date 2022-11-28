import { FC } from 'react';
import styles from './MyInput.module.scss';

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  half?: boolean;
}

const MyInput: FC<Props> = ({ value, onChange, half }) => {
  const style = half ? `${styles.wrap} ${styles.half}` : styles.wrap;

  return (
    <input className={style} type='text' value={value} onChange={onChange} />
  );
};

export { MyInput };
