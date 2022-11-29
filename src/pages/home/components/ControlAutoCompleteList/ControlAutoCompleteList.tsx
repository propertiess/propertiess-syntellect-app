import { FC } from 'react';
import { autoCompleteData } from 'pages/home/utils';
import { ControlAutoComplete } from '../ControlAutoComplete';
import styles from './ControlAutoCompleteList.module.scss';

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
