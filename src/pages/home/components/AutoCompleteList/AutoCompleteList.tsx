import { FC, HTMLAttributes } from 'react';
import { ErrorMessage } from 'common/components/ErrorMessage';
import { Loader } from 'common/components/Loader';
import { useCountries } from 'pages/home/hooks';
import { AutoCompleteItem } from '../AutoCompleteItem';
import styles from './AutoCompleteList.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  length: number;
  debouncedValue: string;
  setValue: (val: string) => void;
}

const AutoCompleteList: FC<Props> = ({
  debouncedValue,
  length,
  setValue,
  ...rest
}) => {
  const { countries, isLoading, error } = useCountries(debouncedValue, length);
  const isSameValue =
    !!countries?.length && debouncedValue === countries[0].name;

  if (!debouncedValue && !countries?.length) return null;

  if (isSameValue) return null;

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage title='Ошибка' message={error.message} />;

  return (
    <div className={styles.wrap} {...rest}>
      {countries?.map(country => (
        <AutoCompleteItem
          key={country.name}
          country={country}
          onClick={() => setValue(country.name)}
        />
      ))}
    </div>
  );
};

export { AutoCompleteList };
