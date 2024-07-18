import React from 'react';
import { ItemBook } from 'types/book';
import './book.css';

export interface BookProps {
  book: ItemBook;
}

const Book = ({ book }: BookProps) => (
  <div className='moleskine-wrapper rounded-md'>
    <div className='moleskine-notebook rounded-md'>
      <div className='notebook-cover blue'>
        <div className='notebook-skin'>
          {book.volumeInfo.imageLinks ? (
            <img
              alt={book.volumeInfo.title}
              src={book.volumeInfo.imageLinks.thumbnail}
              className='rounded-md w-full'
            />
          ) : (
            <img src='https://picsum.photos/200/260' alt='default' />
          )}
        </div>
      </div>
      <div className='notebook-page dotted'></div>
    </div>
  </div>
);

export default Book;
