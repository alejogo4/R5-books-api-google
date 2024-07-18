import Books from '@components/Books';
import Loading from '@components/Loading/Loading';
import SearchInput from '@components/SearchInput';
import useSearchBooks from '@screens/hooks/useSearchBooks';
import { fetchCustomBooks } from '@store/actions/books';
import React from 'react';

const CustomBooks = () => {
  const { response, loading, getBooks } = useSearchBooks({
    fetchBooksAction: fetchCustomBooks
  });

  React.useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <>
      <SearchInput />
      {loading && (
        <div className='flex items-center justify-center py-6'>
          <Loading rows={5} columns={5} width={150} height={200} padding={20} />
        </div>
      )}
      {response?.data && <Books allowAddFavorites={true} books={response.data.items} />}
    </>
  );
};

export default CustomBooks;
