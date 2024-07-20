import { screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RenderWithStorage from '../../test-utils/RenderWithStorage';
import { stateInitial } from '../../test-utils/storage/storage';
import Books from './books';

describe('BookDetail: suite', () => {
  test('Book: Should render quantity of books state', () => {
    RenderWithStorage(
      <BrowserRouter>
        <Books />
      </BrowserRouter>,
      {
        preloadedState: stateInitial
      }
    );

    const book = screen.getAllByTestId('book');
    expect(book).toHaveLength(1);
  });

  test('Book: Should show books', async () => {
    RenderWithStorage(
      <BrowserRouter>
        <Books />
      </BrowserRouter>,
      {
        preloadedState: stateInitial
      }
    );

    const bookTitle = await screen.findByText(/javascript/i);
    expect(bookTitle).toBeInTheDocument();
  });

  test('Book: should show Loading state when loading', () => {
    RenderWithStorage(
      <BrowserRouter>
        <Books />
      </BrowserRouter>
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('Book: book should not show favorite icon', () => {
    RenderWithStorage(
      <BrowserRouter>
        <Books />
      </BrowserRouter>
    );

    expect(screen.queryByTestId('favorite-icon')).not.toBeInTheDocument();
  });
});
