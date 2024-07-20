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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchInput />
      {loading && (
        <div className='flex items-center justify-center py-6' data-testid='loading'>
          <Loading rows={5} columns={5} width={200} height={260} padding={30} />
        </div>
      )}
      {response?.data && <Books allowAddFavorites={true} books={response.data.items} />}
    </>
  );
};

export default CustomBooks;
