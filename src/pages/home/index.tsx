import { FC } from 'react';
import { Layout } from 'common/layout';
import { Controls } from './components/Controls/Controls';

const Home: FC = () => {
  return (
    <Layout>
      <Controls />
    </Layout>
  );
};

export { Home };
