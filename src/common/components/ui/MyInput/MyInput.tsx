import { FC, HTMLAttributes } from 'react';
import styles from './MyInput.module.scss';

interface Props extends HTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  full?: boolean;
}

const MyInput: FC<Props> = ({ value, onChange, full, ...rest }) => {
  const style = full ? `${styles.wrap} ${styles.full}` : styles.wrap;

  return (
    <input
      className={style}
      type='text'
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export { MyInput };
