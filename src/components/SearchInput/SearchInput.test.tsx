
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { setSearchTerm } from './../../store/actions/searchActions';
import SearchInput from './index';



const middlewares = [];
const mockStore = configureStore(middlewares);

describe('SearchInput: Suite', () => {
  test('SearchInput: Dispatches value action when button is clicked', () => {
   
    const store = mockStore({});
    store.dispatch = jest.fn();

    
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );

    
    const input = screen.getByPlaceholderText('Buscar un libro');
    const button = screen.getByText('Buscar');
    
    fireEvent.change(input, { target: { value: 'Harry Potter' } });
    
    fireEvent.click(button);
    expect(store.dispatch).toHaveBeenCalledWith(setSearchTerm('Harry Potter'));
  });

  test('SearchInput: Updates input value when typed', () => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );

    const input = screen.getByPlaceholderText(
      'Buscar un libro'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Harry Potter' } });

    expect(input.value).toBe('Harry Potter');
  });
});
