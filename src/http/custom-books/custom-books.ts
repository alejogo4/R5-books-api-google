
import { Books } from 'types/book';
import axiosInstance from '../axiosInstance';


axiosInstance.defaults.baseURL = process.env.REACT_APP_API_BOOKS;

export const searchBooks = async (query: string): Promise<Books | null > => {
  try {


    const response = await axiosInstance.get('/search.json', {
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