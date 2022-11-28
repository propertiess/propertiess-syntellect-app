import { FC } from 'react';
import { countsOfPrompts } from 'pages/home/utils';
import { ControlAutoComplete } from '../ControlAutoComplete';
import styles from './ControlAutoCompleteList.module.scss';

const ControlAutoCompleteList: FC = () => {
  return (
    <div className={styles.wrap}>
      {countsOfPrompts.map(prompts => (
        <ControlAutoComplete key={prompts} countOfPrompts={prompts} />
      ))}
    </div>
  );
};

export { ControlAutoCompleteList };
