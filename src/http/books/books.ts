import { Books } from 'types/book';
import axiosInstance from '../axiosInstance';



export const searchBooks = async (query: string): Promise<Books | null > => {
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