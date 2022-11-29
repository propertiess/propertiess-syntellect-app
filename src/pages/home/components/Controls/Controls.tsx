import { FC } from 'react';
import { ControlWithButtons } from '../ControlWithButtons';
import styles from './Controls.module.scss';
import { controlsProps } from './controls.data';

const Controls: FC = () => {
  return (
    <div className={styles.wrap}>
      {controlsProps.map(props => (
        <ControlWithButtons key={props.prop} {...props} />
      ))}
    </div>
  );
};

export { Controls };
