import Navbar from '@components/Navbar/Navbar';
import navItems from 'constants/menu';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar items={navItems} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
