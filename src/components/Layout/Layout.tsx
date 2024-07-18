import Navbar from '@components/Navbar/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const navItems = [
  { name: 'Google books', href: '/' },
  { name: 'Books API', href: '/bookstore' },
  { name: 'Favorites', href: '/favorites' }
];

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
