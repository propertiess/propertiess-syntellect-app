import { FC, PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
