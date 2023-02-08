import type { NextPage } from 'next';
import { LinearProgress, Snackbar, Alert } from '@mui/material';

import Header from './Header';
import Footer from './Footer';

type IProps = { showHeader?: boolean };

const Layout: NextPage<IProps> = ({ showHeader = true, children }) => {


  return (
    <div className='app'>
      {showHeader && <Header />}
      <main className='wrapper'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
