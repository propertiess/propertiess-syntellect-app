import { useEffect, useState } from 'react';
import { CountryInfo, getCountryByName } from 'api/apiService';

export const useCountries = (debouncedValue: string, length: number) => {
  const [countries, setCountries] = useState<CountryInfo[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!debouncedValue) {
      countries?.length && setCountries([]);
      return;
    }

    (async () => {
      try {
        !isLoading && setIsLoading(true);
        error && setError(null);

        const data = await getCountryByName(debouncedValue);

        if (!data.length) {
          setError(new Error('Ничего не найдено!'));
        }

        setCountries(data.slice(0, length));
      } catch (e) {
        setError(new Error('Произошла ошибка'));
      } finally {
        setIsLoading(false);
      }
    })();
  }, [debouncedValue]); // eslint-disable-line

  return {
    countries,
    isLoading,
    error
  };
};
