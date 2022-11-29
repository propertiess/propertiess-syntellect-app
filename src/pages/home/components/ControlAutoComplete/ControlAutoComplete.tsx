import { FC, useState } from 'react';
import { MyInput } from 'common/components/ui';
import { Prop } from 'common/store/types';
import { observer } from 'mobx-react-lite';
import { useDebounce, useInput } from 'pages/home/hooks';
import { onTime } from 'pages/home/utils';
import { AutoCompleteList } from '../AutoCompleteList';
import styles from './ControlAutoComplete.module.scss';

interface Props {
  prop: Prop;
  countOfPrompts: number;
}

const ControlAutoComplete: FC<Props> = observer(({ countOfPrompts, prop }) => {
  const [isFocus, setIsFocus] = useState(false);
  const { value, setValue } = useInput(prop);
  const debouncedValue = useDebounce(value ?? '', 500);

  const inputBlurred = () => {
    onTime(isFocus, setIsFocus, false, 200);
  };

  return (
    <div className={styles.wrap}>
      <MyInput
        full
        value={value ?? ''}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={inputBlurred}
        placeholder='Введите страну'
      />
      {isFocus && debouncedValue.trim() && (
        <AutoCompleteList
          setValue={setValue}
          debouncedValue={debouncedValue.trim()}
          length={countOfPrompts}
          onClick={() => setIsFocus(false)}
        />
      )}
    </div>
  );
});

export { ControlAutoComplete };
