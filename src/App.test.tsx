import { screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import RenderWithStorage from './test-utils/RenderWithStorage';
import { stateInitial } from './test-utils/storage/storage';

describe('App: Suite', () => {
  test('App: Should show books', async () => {
    RenderWithStorage(<App />, {
      preloadedState: stateInitial
    });

    const bookTitle = await screen.findByText(/javascript/i);
    const pageTitle = await screen.findByText(/R5-books/i);

    expect(pageTitle).toBeInTheDocument();
    expect(bookTitle).toBeInTheDocument();
  });

  test('App: Should render quantity of books state', async () => {
    RenderWithStorage(<App />, {
      preloadedState: stateInitial
    });
    const book = screen.getAllByTestId('book');

    expect(book).toHaveLength(1);
  });

  test('App: Should render loading state', async () => {
    const state = {
      ...stateInitial,
      books: { ...stateInitial.books, loading: true }
    };

    console.log(state)
    RenderWithStorage(<App />, {
      preloadedState: state
    });
    
    const loading =  screen.getByTestId('loading');
    expect(loading).toBeInTheDocument();
  });
});
