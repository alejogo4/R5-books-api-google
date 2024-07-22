import Books from '@components/Books';
import Loading from '@components/Loading/Loading';
import SearchInput from '@components/SearchInput';
import useSearchBooks from '@screens/hooks/useSearchBooks';
import { fetchBooks } from '@store/actions/books';
import React from 'react';

const BooksList = () => {
  const { response, loading } = useSearchBooks({
    fetchBooksAction: fetchBooks
  });

  return (
    <>
      <SearchInput />

      {loading && (
        <div
          className='flex items-center justify-center py-6'
          data-testid='loading'
        >
          <Loading rows={5} columns={5} width={200} height={260} padding={30} />
        </div>
      )}
      {response?.data && (
        <Books allowAddFavorites={false} books={response.data.items} />
      )}
    </>
  );
};

export default BooksList;
