import { screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RenderWithStorage from '../../test-utils/RenderWithStorage';
import { mockBookDetail, stateInitial } from '../../test-utils/storage/storage';
import { useAppDispatch, useAppSelector } from './../../store/index';
import Favorites from './favorites';

jest.mock('@store/index', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn()
}));

describe('Favorites: suite', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
    (useAppSelector as jest.Mock).mockReturnValue({
      favoriteBooks: { '/works/OL25520448W': mockBookDetail }
    });
  });

  test('Favorites: should render the favorite button when allowAddFavorites is true', () => {
    RenderWithStorage(
      <BrowserRouter>
        <Favorites />
      </BrowserRouter>,
      {
        preloadedState: stateInitial
      }
    );
    expect(screen.getByTestId('favorite-icon')).toBeInTheDocument();
  });

  test('Favorites: should render books lenght correctly', () => {
    RenderWithStorage(
      <BrowserRouter>
        <Favorites />
      </BrowserRouter>,
      {
        preloadedState: stateInitial
      }
    );
    const book = screen.getAllByTestId('book');
    expect(book).toHaveLength(1);
  });

  test('Favorites: should render the no favorites message when there are no favorite books', () => {
    const emptyState = {
      ...stateInitial,
      user: {
        ...stateInitial.user,
        favoriteBooks: {}
      }
    };

    (useAppSelector as jest.Mock).mockImplementation(callback => {
      return callback(emptyState.user);
    });

    RenderWithStorage(
      <BrowserRouter>
        <Favorites />
      </BrowserRouter>,
      {
        preloadedState: stateInitial
      }
    );

    expect(
      screen.getByText('No favorites yet. Add the first book here!')
    ).toBeInTheDocument();
  });
});
