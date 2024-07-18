import { createReducer } from '@reduxjs/toolkit';
import {
  toggleFavoriteBook
} from '@store/actions/userActions';
import { ItemBook } from 'types/book';

interface UserState {
  favoriteBooks: { [key: string]: ItemBook };
}

const initialState: UserState = {
  favoriteBooks: {}
};

const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(toggleFavoriteBook, (state, action) => {
      const book = action.payload;
      if (state.favoriteBooks[book.id]) {
        delete state.favoriteBooks[book.id];
      } else {
        state.favoriteBooks[book.id] = book;
      }
    })
});

export default userReducer;
