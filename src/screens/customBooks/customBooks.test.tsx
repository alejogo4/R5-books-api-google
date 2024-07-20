import { screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RenderWithStorage from '../../test-utils/RenderWithStorage';
import { stateInitial } from '../../test-utils/storage/storage';
import CustomBooks from './customBooks';

describe('CustomBook: suite', () => {
  test('CustomBook: Should render quantity of books state', () => {
    RenderWithStorage(
      <BrowserRouter>
        <CustomBooks />
      </BrowserRouter>,
      {
        preloadedState: stateInitial
      }
    );

    const book = screen.getAllByTestId('book');
    expect(book).toHaveLength(1);
  });

  test('CustomBook: Should show books', async () => {
    RenderWithStorage(
      <BrowserRouter>
        <CustomBooks />
      </BrowserRouter>,
      {
        preloadedState: stateInitial
      }
    );

    const bookTitle = await screen.findByText(/javascript/i);
    expect(bookTitle).toBeInTheDocument();
  });

  test('CustomBook: should show Loading state when loading', () => {
    const state = {
      ...stateInitial,
      books: { ...stateInitial.books, loading: true }
    };

    RenderWithStorage(
      <BrowserRouter>
        <CustomBooks />
      </BrowserRouter>,
      { preloadedState: state }
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('Book: book show favorite icon', () => {
    RenderWithStorage(
      <BrowserRouter>
        <CustomBooks />
      </BrowserRouter>,
      {
        preloadedState: stateInitial
      }
    );

    expect(screen.getByTestId('favorite-icon')).toBeInTheDocument();
  });
});
