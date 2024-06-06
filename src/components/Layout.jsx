import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './Header/Header';
import Loader from './Loader';

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
