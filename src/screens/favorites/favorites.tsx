import Books from '@components/Books';
import SearchInput from '@components/SearchInput';
import { useAppSelector } from '@store/index';
import React, { useMemo } from 'react';
import { ItemBook } from 'types/book';

const Favorites = () => {
  const state = useAppSelector(state => state.user || {});
  const { favoriteBooks = {} } = state;

  const favoriteBooksArray: ItemBook[] = useMemo(() => {
    return Object.values(favoriteBooks);
  }, [favoriteBooks]);

  if (favoriteBooksArray.length === 0) {
    return (
      <div className='max-w-4xl mx-auto my-6 bg-white shadow-2xl rounded-lg overflow-hidden'>
        <div className='p-4 text-gray-700'>
          No favorites yet. Add the first book here!
        </div>
      </div>
    );
  }

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
