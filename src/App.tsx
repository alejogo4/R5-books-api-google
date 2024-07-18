import BooksList from '@screens/books/books';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BooksList />} />
         <Route path='/' element={<BooksList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
