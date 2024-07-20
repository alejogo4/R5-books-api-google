
import { RootState } from '@store/index';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

const renderWithRedux = (ui: React.ReactElement, initialState: RootState) => {
  const store = mockStore(initialState);
  return render(<Provider store={store}>{ui}</Provider>);
};
