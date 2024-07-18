import { setBookDetail } from '@store/actions/books';
import { toggleFavoriteBook } from '@store/actions/userActions';
import { useAppDispatch, useAppSelector } from '@store/index';
import React, { useEffect, useState } from 'react';
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ItemBook } from 'types/book';
import './book.css';

export interface BookProps {
  book: ItemBook;
  allowAddFavorites?: boolean;
}

const Book = ({ book, allowAddFavorites }: BookProps) => {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useAppDispatch();
  const { favoriteBooks } = useAppSelector(state => state.user);

  const onHandleFavorite = () => {
    setFavorite(!favorite);
    dispatch(toggleFavoriteBook(book));
  };

  const onHandleSetBook = () => {
    dispatch(setBookDetail(book));
  };

  useEffect(() => {
    if (allowAddFavorites && favoriteBooks[book.id]) {
      setFavorite(true);
    }
  }, [book.id, favoriteBooks, allowAddFavorites]);

  return (
    <div className='moleskine-wrapper rounded-md'>
      <div className='moleskine-notebook rounded-md relative'>
        <Link
          onClick={onHandleSetBook}
          to={allowAddFavorites ? `/book/${book.id}` : '/'}
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
          {allowAddFavorites && (
            <div
              className='absolute right-3 bottom-3 cursor-pointer'
              onClick={e => {
                e.stopPropagation();
                onHandleFavorite();
              }}
            >
              {favorite ? (
                <MdOutlineFavorite color='#6c63ff' size={35} />
              ) : (
                <MdFavoriteBorder color='#6c63ff' size={35} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
