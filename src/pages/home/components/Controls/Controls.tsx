import { FC } from 'react';
import { ErrorMessage } from 'common/components/ErrorMessage';
import { MyButton, MyInput } from 'common/components/ui';
import { observer } from 'mobx-react-lite';
import { useButton, useInput } from 'pages/home/hooks';
import styles from './Controls.module.scss';

const Controls: FC = observer(() => {
  const first = useInput('first');
  const second = useInput('second');

  const { alertMessage, alertNumber, error } = useButton();

  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        <MyInput
          value={first.value ?? ''}
          onChange={e => first.setValue(e.target.value)}
          placeholder='Введите текст'
        />
        <MyButton onClick={first.resetValue}>Очистить поле ввода</MyButton>
        <MyButton onClick={first.setHelloWorld}>
          Поменять текст на Hello world!
        </MyButton>
      </div>
      <div className={styles.row}>
        <MyButton onClick={() => alertNumber(second.value ?? '')}>
          Показать Alert, если в поле ввода число
        </MyButton>
        <MyInput
          value={second.value ?? ''}
          onChange={e => second.setValue(e.target.value)}
          placeholder='Введите текст'
        />
        <MyButton onClick={() => alertMessage(second.value ?? '')}>
          Показать Alert с текстом в поле ввода
        </MyButton>
      </div>

      {error && <ErrorMessage title='Error' message={error.message} />}
    </div>
  );
});

export { Controls };
