import { createReducer } from '@reduxjs/toolkit';
import { fetchBooks, setBookDetail } from '@store/actions/books';
import { Books, ItemBook } from 'types/book';

const initialState: {
  books: Books | null;
  bookDetail: ItemBook | null;
  loading: boolean;
  error: string | null;
} = {
  books: null,
  bookDetail: null,
  loading: false,
  error: null
};

const booksReducer = createReducer(initialState, builder => {
  builder
    .addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchBooks.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(setBookDetail, (state, action) => {
      state.bookDetail = action.payload;
    });
});

export default booksReducer;
