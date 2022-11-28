import { FC, PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='p-3'>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
