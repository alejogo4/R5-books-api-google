import FavoriteButton from '@components/Favorite/Favorite';
import { Paragraphs } from '@components/Typography';
import { setBookDetail } from '@store/actions/books';
import { useAppDispatch } from '@store/index';
import React from 'react';
import { Link } from 'react-router-dom';
import { ItemBook } from 'types/book';
import './book.css';

export interface BookProps {
  book: ItemBook;
  allowAddFavorites?: boolean;
}

const Book = ({ book, allowAddFavorites }: BookProps) => {
  const dispatch = useAppDispatch();

  const onHandleSetBook = () => {
    dispatch(setBookDetail(book));
  };

  return (
    <div className='moleskine-wrapper rounded-md' data-testid='book'>
      <div className='moleskine-notebook rounded-md relative'>
        <Link
          onClick={onHandleSetBook}
          to={
            allowAddFavorites ? `/book/${book.id.replace('/works/', '')}` : '/'
          }
          className='notebook-cover blue'
          data-testid='book-link'
        >
          <div className='notebook-skin'>
            <Paragraphs
              fontSize='xs'
              className='mb-1 overflow-hidden whitespace-nowrap text-ellipsis text-dark'
            >
              {' '}
              {book.volumeInfo.title}
            </Paragraphs>
            {book.volumeInfo.imageLinks ? (
              <img
                alt={book.volumeInfo.title}
                src={book.volumeInfo.imageLinks.thumbnail}
                className='rounded-md w-full max-h-[90%]'
              />
            ) : (
              <img src='https://picsum.photos/200/260' alt='default' />
            )}
          </div>
        </Link>
        <div className='notebook-page dotted'>
          <FavoriteButton
            allowAddFavorites={allowAddFavorites ?? false}
            book={book}
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
