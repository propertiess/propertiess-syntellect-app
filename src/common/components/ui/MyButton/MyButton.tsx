import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './MyButton.module.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const MyButton: FC<PropsWithChildren<Props>> = ({ children, ...rest }) => {
  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  );
};

export { MyButton };
