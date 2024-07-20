import { Paragraphs } from '@components/Typography';
import React from 'react';
import { ItemBook } from 'types/book';
import Book from '../Book';
import './books.css';

export interface BooksProps {
  books: ItemBook[];
  allowAddFavorites?: boolean;
}

const Books = ({ books, allowAddFavorites }: BooksProps) => {
  return (
    <div className='w-full max-w-[1200px] mx-auto py-6 sm:px-4 md:px-0 '>
      <Paragraphs className='font-bold text-sm text-right'>Results: {books.length}</Paragraphs>
      <div className='w-full mx-auto grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  mt-2 gap-3 justify-center'>
        {books.map(book => (
          <Book allowAddFavorites={allowAddFavorites} key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
