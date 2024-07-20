import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { useAppDispatch, useAppSelector } from '../../store';
import Book from './index';
import { setBookDetail } from './../../store/actions/books';
import { mockBookDetail, stateInitial } from '../../test-utils/storage/storage';

jest.mock('@store/index', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn()
}));

const mockStore = configureStore([]);

describe('Book: Suite', () => {
  const dispatch = jest.fn();

  const state = {
    ...stateInitial,
    user: { favoriteBooks: { '/works/OL25520448W': mockBookDetail } }
  };


  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
    (useAppSelector as jest.Mock).mockReturnValue(state);
  });


  test('Book: should call onHandleSetBook and navigate to correct route on click', () => {
    
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route
              path='/'
              element={<Book book={mockBookDetail} allowAddFavorites={true} />}
            />
            <Route path='/book/:id' element={<div>Book Detail</div>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const linkElement = screen.getByTestId('book-link');
    fireEvent.click(linkElement);

    expect(dispatch).toHaveBeenCalledWith(setBookDetail(mockBookDetail));

    expect(screen.getByText('Book Detail')).toBeInTheDocument();
  });
});
