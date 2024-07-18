import Books from '@components/Books';
import SearchInput from '@components/SearchInput';
import { useAppSelector } from '@store/index';

import React from 'react';
import Loading from '@components/Loading/Loading';
import Navbar from '@components/Navbar/Navbar';
import { ItemBook } from 'types/book';

interface Response {
  data?: {
    items: ItemBook[];
  };
}

const navItems = [
  { name: 'Google books', href: '/' },
  { name: 'Books API', href: '/bookstore' },
  { name: 'Favorites', href: '/favorites' },
];

const BooksList = () => {
  const [response, setResponse] = React.useState<Response>({});

  const { loading } = useAppSelector(state => state.books);

  return (
    <div>
      <Navbar items={navItems}/>
      <SearchInput setResponse={setResponse} />
      {loading && (
        <div className='flex items-center justify-center py-6'>
          <Loading rows={5} columns={5} width={150} height={200} padding={20} />
        </div>
      )}
      {response.data && <Books books={response.data.items} />}
    </div>
  );
};

export default BooksList;
