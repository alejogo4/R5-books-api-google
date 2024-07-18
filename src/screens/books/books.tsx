import { BookType } from '@components/Book';
import Books from '@components/Books';
import SearchInput from '@components/SearchInput';
import React from 'react';



interface Response {
  data?: {
    items: BookType[];
  };
}

const BooksList = () => {
  const [response, setResponse] = React.useState<Response>({});
  return (
    <div>
      <SearchInput setResponse={setResponse} />
      {response.data && <Books books={response.data.items} />}
    </div>
  );
};

export default BooksList;
