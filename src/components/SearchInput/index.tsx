import Button from '@components/Button/Button';
import { fetchBooks } from '@store/actions/books';
import { useAppDispatch, useAppSelector } from '@store/index';
import React, { ChangeEvent } from 'react';
import './SearchInput.css';

interface SearchInputProps {
  setResponse: Function;
}

const SearchInput = ({ setResponse }: SearchInputProps) => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector(state => state.books);

  const [searchValue, setSearchValue] = React.useState('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  const getBooks = async (title: string = 'javascript') => {
    await dispatch(fetchBooks(title));
  };

  React.useEffect(() => {
    if (books?.items) {
      setResponse({
        data: {
          items: books.items
        }
      });
    }
  }, [books, setResponse]);

  React.useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className='w-full dark:bg-gray-400 flex items-center justify-center py-6'>
      <div className='w-full max-w-[960px] flex grid grid-cols-400px auto-1fr 140px gap-6 px-6'>
        <input
          className='search-input'
          type='text'
          placeholder='Buscar un libro'
          value={searchValue}
          onChange={handleInputChange}
        />
        <Button variant='primary' onClick={() => getBooks(searchValue)}>
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;
