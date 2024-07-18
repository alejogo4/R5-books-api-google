import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchBooks } from 'http/books/books';
import { Books } from 'types/book';


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
