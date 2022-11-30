import { FC, useState } from 'react';
import { MyInput } from 'common/components/ui';
import { Prop } from 'common/store/types';
import { observer } from 'mobx-react-lite';
import { useDebounce, useInput } from 'pages/home/hooks';
import { useClickOutside } from 'pages/home/hooks/useClickOutside';
import { AutoCompleteList } from '../AutoCompleteList';
import styles from './ControlAutoComplete.module.scss';

interface Props {
  prop: Prop;
  countOfPrompts: number;
}

const ControlAutoComplete: FC<Props> = observer(({ countOfPrompts, prop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { value, setValue } = useInput(prop);
  const debouncedValue = useDebounce(value ?? '', 500);

  const ref = useClickOutside(() => {
    setIsOpen(false);
  }, isOpen);

  return (
    <div className={styles.wrap} ref={ref}>
      <MyInput
        full
        value={value ?? ''}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setIsOpen(true)}
        placeholder='Введите страну'
      />
      {isOpen && debouncedValue.trim() && (
        <AutoCompleteList
          setValue={setValue}
          debouncedValue={debouncedValue.trim()}
          length={countOfPrompts}
        />
      )}
    </div>
  );
});

export { ControlAutoComplete };
