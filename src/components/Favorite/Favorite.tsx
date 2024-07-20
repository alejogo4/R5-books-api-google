import { toggleFavoriteBook } from '@store/actions/userActions';
import { useAppDispatch, useAppSelector } from '@store/index';
import React, { useState, useEffect, MouseEvent } from 'react';
import { MdOutlineFavorite, MdFavoriteBorder } from 'react-icons/md';
import { ItemBook } from 'types/book';

interface FavoriteButtonProps {
  allowAddFavorites: boolean;
  book: ItemBook;
  className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  allowAddFavorites,
  book,
  className
}) => {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useAppDispatch();
  const { favoriteBooks = {} } = useAppSelector(state => state.user);

  const onHandleFavorite = (e: MouseEvent) => {
    e.stopPropagation();
    setFavorite(!favorite);
    dispatch(toggleFavoriteBook(book));
  };

  useEffect(() => {
    if (allowAddFavorites && book.id && favoriteBooks[book.id]) {
      setFavorite(true);
    }
  }, [book.id, favoriteBooks, allowAddFavorites]);

  return (
    <>
      {allowAddFavorites && (
        <div
          className={`absolute right-3 bottom-3 cursor-pointer ${className}`}
          onClick={onHandleFavorite}
          data-testid='favorite-icon'
        >
          {favorite ? (
            <MdOutlineFavorite color='#6c63ff' size={35} />
          ) : (
            <MdFavoriteBorder color='#6c63ff' size={35} />
          )}
        </div>
      )}
    </>
  );
};

export default FavoriteButton;
