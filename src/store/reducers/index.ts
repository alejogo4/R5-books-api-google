import { combineReducers } from '@reduxjs/toolkit';
import booksReducer from './bookReducer';
import commentsReducer from './commentsReducer';
import searchReducer from './searchReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  search: searchReducer,
  comments: commentsReducer,
  user: userReducer,
});

export default rootReducer;
