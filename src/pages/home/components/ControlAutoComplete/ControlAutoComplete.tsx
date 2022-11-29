import { FC, useState } from 'react';
import { MyInput } from 'common/components/ui';
import { Prop } from 'common/store/types';
import { observer } from 'mobx-react-lite';
import { useDebounce, useInput } from 'pages/home/hooks';
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

  return (
    <div className={styles.wrap}>
      <MyInput
        full
        value={value ?? ''}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setIsFocus(true)}
        placeholder='Введите страну'
      />
      {isFocus && (
        <AutoCompleteList
          setValue={setValue}
          debouncedValue={debouncedValue}
          length={countOfPrompts}
          onClick={() => setIsFocus(false)}
        />
      )}
    </div>
  );
});

export { ControlAutoComplete };
