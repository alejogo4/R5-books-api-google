import { toggleFavoriteBook } from '@store/actions/userActions';
import { useAppDispatch } from '@store/index';
import React, { useState } from 'react';
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { ItemBook } from 'types/book';
import './book.css';

export interface BookProps {
  book: ItemBook;
  allowAddFavorites?: boolean;
}

const Book = ({ book, allowAddFavorites }: BookProps) => {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useAppDispatch();

  const onHandleFavorite = ()=>{
    setFavorite(!favorite)
    dispatch(toggleFavoriteBook(book));
  }

  

  return (
    <div className='moleskine-wrapper rounded-md'>
      <div className='moleskine-notebook rounded-md relative'>
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
        <div className='notebook-page dotted'>
          {allowAddFavorites && (
            <div
              className='absolute right-3 bottom-3 cursor-pointer'
              onClick={onHandleFavorite}
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
