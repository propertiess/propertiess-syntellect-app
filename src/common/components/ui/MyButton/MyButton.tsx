import { ButtonHTMLAttributes, FC } from 'react';
import styles from './MyButton.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const MyButton: FC<Props> = ({ children, ...rest }) => {
  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  );
};

export { MyButton };
