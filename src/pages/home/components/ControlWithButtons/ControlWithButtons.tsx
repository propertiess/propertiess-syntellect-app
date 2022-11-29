import { FC } from 'react';
import { MyButton, MyInput } from 'common/components/ui';
import { Prop } from 'common/store/types';
import { observer } from 'mobx-react-lite';
import { useInput } from 'pages/home/hooks';
import { IButtons } from 'pages/home/types';
import styles from './ControlWithButtons.module.scss';

export interface ControlWithButtonsProps {
  leftButtons?: IButtons[];
  rightButtons?: IButtons[];
  prop: Prop;
}

const ControlWithButtons: FC<ControlWithButtonsProps> = observer(
  ({ leftButtons, rightButtons, prop }) => {
    const { value, setValue } = useInput(prop);

    return (
      <div className={styles.row}>
        {leftButtons?.map(btn => (
          <MyButton key={btn.title} onClick={btn.callback}>
            {btn.title}
          </MyButton>
        ))}
        <MyInput
          value={value ?? ''}
          onChange={e => setValue(e.target.value)}
          placeholder='Введите текст'
        />
        {rightButtons?.map(btn => (
          <MyButton key={btn.title} onClick={btn.callback}>
            {btn.title}
          </MyButton>
        ))}
      </div>
    );
  }
);

export { ControlWithButtons };
