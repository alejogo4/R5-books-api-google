import {combineReducers} from '@reduxjs/toolkit';
import booksReducer from './bookReducer';
import invoiceReducer from './invoiceReducer';

const rootReducer = combineReducers({
  invoices: invoiceReducer,
  books: booksReducer,
});

export default rootReducer;
