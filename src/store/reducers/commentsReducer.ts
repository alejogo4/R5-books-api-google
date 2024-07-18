import { createReducer } from '@reduxjs/toolkit';
import {
  addComment,
  getCommentsByBookId
} from '@store/actions/commentsActions';

interface CommentsState {
  [key: string]: string[];
}

const initialState: CommentsState = {};

const commentsReducer = createReducer(initialState, builder => {
  builder
    .addCase(addComment, (state, action) => {
      const { bookId, comment } = action.payload;
      if (!state[bookId]) {
        state[bookId] = [];
      }
      state[bookId].push(comment);
    })
    .addCase(getCommentsByBookId, (state, action) => {
      return action.payload ? state[action.payload] : {};
    });
});

export default commentsReducer;
