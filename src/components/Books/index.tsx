import { Paragraphs } from '@components/Typography';
import React from 'react';
import { ItemBook } from 'types/book';
import Book from '../Book';
import './books.css';

export interface BooksProps {
  books: ItemBook[];
  allowAddFavorites?: boolean;
}

const Books = ({ books }: BooksProps) => {
  return (
    <div className='w-full max-w-[1200px] mx-auto py-6'>
      <Paragraphs className='font-bold text-sm text-right'>Results: {books.length}</Paragraphs>
      <div className='w-full w mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {books.map(book => (
          <Book allowAddFavorites key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
