import Books from '@components/Books';
import SearchInput from '@components/SearchInput';
import { useAppSelector } from '@store/index';
import React, { useMemo } from 'react';
import { ItemBook } from 'types/book';

const Favorites = () => {
  const { favoriteBooks } = useAppSelector(state => state.user);

  const favoriteBooksArray: ItemBook[] = useMemo(() => {
    return Object.values(favoriteBooks);
  }, [favoriteBooks]);

  return (
    <>
      <SearchInput />
      {favoriteBooksArray && (
        <Books allowAddFavorites={true} books={favoriteBooksArray} />
      )}
    </>
  );
};

export default Favorites;
