import { FC, HTMLAttributes } from 'react';
import { CountryInfo } from 'api/apiService';
import styles from './AutoCompleteItem.module.scss';

interface Props extends HTMLAttributes<unknown> {
  country: CountryInfo;
}

const AutoCompleteItem: FC<Props> = ({ country, ...rest }) => {
  const { name, fullName, flag } = country;

  return (
    <p className={styles.wrap} {...rest}>
      <span className={styles.names}>
        <span>{name}</span>
        <span className={styles.fullName}>{fullName}</span>
      </span>
      <img src={flag} alt={name} />
    </p>
  );
};

export { AutoCompleteItem };
