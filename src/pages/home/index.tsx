import { FC } from 'react';
import { Layout } from 'common/layout';
import { ControlAutoCompleteList } from './components/ControlAutoCompleteList';
import { Controls } from './components/Controls';

const Home: FC = () => {
  return (
    <Layout>
      <Controls />
      <ControlAutoCompleteList />
    </Layout>
  );
};

export { Home };
