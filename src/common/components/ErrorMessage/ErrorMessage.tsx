import { FC } from 'react';
import styles from './ErrorMessage.module.scss';

interface Props {
  title: string;
  message: string;
}

const ErrorMessage: FC<Props> = ({ title, message }) => {
  return (
    <div className={styles.wrap} role='alert'>
      <div className={styles.title}>{title}</div>
      <div className={styles.message}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export { ErrorMessage };
