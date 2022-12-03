import { FC, InputHTMLAttributes } from 'react';
import styles from './MyInput.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  full?: boolean;
}

const MyInput: FC<Props> = ({ full, ...rest }) => {
  const style = full ? `${styles.wrap} ${styles.full}` : styles.wrap;

  return <input className={style} type='text' spellCheck={false} {...rest} />;
};

export { MyInput };
