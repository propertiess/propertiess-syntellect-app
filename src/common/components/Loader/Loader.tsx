import { FC, HTMLAttributes } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface Props extends HTMLAttributes<unknown> {}

const Loader: FC<Props> = ({ ...rest }) => {
  return (
    <div className='flex p-3 justify-center' {...rest}>
      <ClipLoader color='blue' />
    </div>
  );
};

export { Loader };
