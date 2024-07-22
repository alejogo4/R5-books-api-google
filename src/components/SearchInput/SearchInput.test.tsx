import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useAppDispatch, useAppSelector } from '../../store';
import { stateInitial } from '../../test-utils/storage/storage';
import { setSearchTerm } from './../../store/actions/searchActions';
import SearchInput from './index';

const middlewares = [];
const mockStore = configureStore(middlewares);

jest.mock('@store/index', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn()
}));

describe('SearchInput: Suite', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
    (useAppSelector as jest.Mock).mockReturnValue({
      term: ''
    });
  });

  const store = mockStore(stateInitial);

  test('SearchInput: Dispatches value action when button is clicked', () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Buscar un libro');
    const button = screen.getByText('Buscar');

    fireEvent.change(input, { target: { value: 'Harry Potter' } });

    fireEvent.click(button);
    expect(dispatch).toHaveBeenCalledWith(setSearchTerm('Harry Potter'));
  });

  test('SearchInput: Updates input value when typed', () => {
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
