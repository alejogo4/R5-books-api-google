
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const testStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default testStore;
