import Button from '@components/Button/Button';
import { setSearchTerm } from '@store/actions/searchActions';
import { useAppDispatch } from '@store/index';
import React, { ChangeEvent } from 'react';
import './SearchInput.css';


const SearchInput = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = React.useState('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  const handleSearchBooks = ()=>{
    dispatch(setSearchTerm(searchValue));
  }


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
        <Button variant='primary' onClick={handleSearchBooks}>
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;
