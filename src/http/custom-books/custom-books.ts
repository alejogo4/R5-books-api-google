import { Books } from 'types/book';
import { BooksResponse, mapBooksResponse } from 'types/custom-books';
import axiosInstance from '../axiosInstance';



export const searchBooks = async (query: string): Promise<Books | null> => {
  axiosInstance.defaults.baseURL = process.env.REACT_APP_API_BOOKS;
  try {
    const response = await axiosInstance.get('/search.json', {
      params: {
        q: query,
        limit: 30
      }
    });

    const data = mapBooksResponse(response.data as BooksResponse) as Books

    return data;
  } catch (error: any) {
    console.error('Error fetching books:', error);
    return null;
  }
};
