import Layout from '@components/Layout/Layout';
import BooksList from '@screens/books/books';
import CustomBooks from '@screens/customBooks/customBooks';
import Favorites from '@screens/favorites/favorites';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<BooksList />} />
          <Route path='/bookstore' element={<CustomBooks />} />
          <Route path='/favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
