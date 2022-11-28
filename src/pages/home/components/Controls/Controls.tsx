import { FC } from 'react';
import { MyButton } from 'common/components/ui/MyButton/MyButton';
import { MyInput } from 'common/components/ui/MyInput/MyInput';
import styles from './Controls.module.scss';

const Controls: FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        <MyInput />
        <MyButton>Очистить поле ввода</MyButton>
        <MyButton>Поменять текст на Hello world!</MyButton>
      </div>
      <div className={styles.row}>
        <MyButton>Включить Alert с текстом в поле ввода</MyButton>
        <MyInput />
        <MyButton>Включить Alert, если в поле ввода число</MyButton>
      </div>
    </div>
  );
};

export { Controls };
