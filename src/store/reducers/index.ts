import {combineReducers} from '@reduxjs/toolkit';
import booksReducer from './bookReducer';
import commentsReducer from './commentsReducer';
import invoiceReducer from './invoiceReducer';
import searchReducer from './searchReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  invoices: invoiceReducer,
  books: booksReducer,
  search: searchReducer,
  comments: commentsReducer,
  user: userReducer,
});

export default rootReducer;
