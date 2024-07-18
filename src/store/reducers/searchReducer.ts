import { createReducer } from '@reduxjs/toolkit';
import { setSearchTerm } from '@store/actions/searchActions';

interface SearchState {
  term: string;
}

const initialState: SearchState = {
  term: ''
};

const searchReducer = createReducer(initialState, builder => {
  builder.addCase(setSearchTerm, (state, action) => {
    state.term = action.payload;
  });
});

export default searchReducer;
