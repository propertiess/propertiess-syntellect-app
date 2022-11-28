import { FC } from 'react';
import { MyInput } from 'common/components/ui';
import { observer } from 'mobx-react-lite';
import { useInput } from 'pages/home/hooks/useInput';

interface Props {
  countOfPrompts: number;
}

const ControlAutoComplete: FC<Props> = observer(({ countOfPrompts }) => {
  const { value, onChange } = useInput();

  return (
    <MyInput
      half
      value={value ?? ''}
      onChange={e => onChange(e.target.value)}
    />
  );
});

export { ControlAutoComplete };
