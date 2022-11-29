import { FC } from 'react';
import { ControlAutoComplete } from '../ControlAutoComplete';
import styles from './ControlAutoCompleteList.module.scss';
import { autoCompleteData } from './control-auto-complete.data';

const ControlAutoCompleteList: FC = () => {
  return (
    <div className={styles.wrap}>
      {autoCompleteData.map(data => (
        <ControlAutoComplete key={data.prop} {...data} />
      ))}
    </div>
  );
};

export { ControlAutoCompleteList };
