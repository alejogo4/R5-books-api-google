import FavoriteButton from '@components/Favorite/Favorite';
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
    <div className='moleskine-wrapper rounded-md'>
      <div className='moleskine-notebook rounded-md relative'>
        <Link
          onClick={onHandleSetBook}
          to={
            allowAddFavorites ? `/book/${book.id.replace('/works/', '')}` : '/'
          }
          className='notebook-cover blue'
        >
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
