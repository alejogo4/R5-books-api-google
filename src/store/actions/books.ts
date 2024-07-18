import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { searchBooks } from 'http/books/books';
import { searchBooks as searchCustomBooks } from 'http/custom-books/custom-books';
import { Books, ItemBook } from 'types/book';

export const fetchBooks = createAsyncThunk<Books | null, string>(
  'books/fetch-books',
  async (q: string) => {
    try {
      const response = await searchBooks(q);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCustomBooks = createAsyncThunk<Books | null, string>(
  'books/fetch-books',
  async (q: string) => {
    try {
      const response = await searchCustomBooks(q);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const setBookDetail = createAction<ItemBook>('books/set-book');
