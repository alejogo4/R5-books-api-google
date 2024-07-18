import axios, { AxiosInstance } from 'axios';

const API_URL = process.env.REACT_APP_GOOGLE_BOOKS_API_URL;
const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
    q: "programming"
  },
});

export default axiosInstance;