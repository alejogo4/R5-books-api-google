import { Books } from 'types/book';
import axiosInstance from '../axiosInstance';




export const searchBooks = async (query: string): Promise<Books | null > => {
  axiosInstance.defaults.baseURL = process.env.REACT_APP_GOOGLE_BOOKS_API_URL;
  try {
    const response = await axiosInstance.get('/volumes', {
      params: {
        q: query
      }
    });

    return response.data as Books;
  } catch (error: any) {
    console.error('Error fetching books:', error);
    return null;
  }
};