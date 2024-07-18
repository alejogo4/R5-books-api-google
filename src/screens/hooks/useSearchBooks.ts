import { useAppDispatch, useAppSelector } from '@store/index';
import { useEffect, useState } from 'react';
import { ItemBook } from 'types/book';

type UseBooksHookParams = {
  fetchBooksAction: (title: string) => any;
  initialTitle?: string;
};

interface Response {
  data?: {
    items: ItemBook[];
  };
}

const useSearchBooks = ({
  fetchBooksAction,
  initialTitle = 'javascript'
}: UseBooksHookParams) => {
  const [response, setResponse] = useState<Response>();
  const dispatch = useAppDispatch();
  const { books, loading } = useAppSelector(state => state.books);
  const { term } = useAppSelector(state => state.search);

  const getBooks = async (title: string = initialTitle) => {
    await dispatch(fetchBooksAction(title));
  };

  useEffect(() => {
    if (term) {
      getBooks(term);
    }
  }, [term]);

  useEffect(() => {
    if (books?.items) {
      setResponse({
        data: {
          items: books.items
        }
      });
    }
  }, [books]);

  return { response, loading, getBooks };
};

export default useSearchBooks;
