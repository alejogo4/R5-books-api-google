import { addComment } from './../../store/actions/commentsActions';
import { useAppDispatch, useAppSelector } from './../../store/index';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { useParams } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import BookDetail from './booksDetail';
import { mockBookDetail, stateInitial } from '../../test-utils/storage/storage';

const middlewares = [];
const mockStore = configureStore(middlewares);

jest.mock('react-router-dom', () => ({
  useParams: jest.fn()
}));

jest.mock('@store/index', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn()
}));

describe('BookDetail: suite', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ id: '123' });
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
    (useAppSelector as jest.Mock).mockReturnValue({
      bookDetail: mockBookDetail
    });
  });

  
  const store = mockStore(stateInitial);

  test('BookDetail: renders book details correctly', () => {
    render(
      <Provider store={store}>
        <BookDetail />
      </Provider>
    );

    expect(screen.getByText('Javascript')).toBeInTheDocument();
    expect(screen.getByText('Js Description')).toBeInTheDocument();
    expect(screen.getByText('Ladoo Publishing LLC')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
  });

  test('BookDetail: updates textarea and handles submit correctly', () => {
    render(
      <Provider store={store}>
        <BookDetail />
      </Provider>
    );

    const textarea = screen.getByRole('textbox');
    const button = screen.getByText('Submit Comment');

    expect(textarea).toHaveValue('');

    fireEvent.change(textarea, { target: { value: 'Great book!' } });

    expect(textarea).toHaveValue('Great book!');

    expect(button).not.toBeDisabled();

    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledWith(
      addComment({
        bookId: '123',
        comment: 'Great book!'
      })
    );
  });

  test('BookDetail: disables submit button when textarea is empty', () => {
    render(
      <Provider store={store}>
        <BookDetail />
      </Provider>
    );

    const textarea = screen.getByRole('textbox');
    const button = screen.getByText('Submit Comment');

    fireEvent.change(textarea, { target: { value: '' } });

    expect(button).toBeDisabled();
  });

  test('BookDetail: empty state comments', () => {
    render(
      <Provider store={store}>
        <BookDetail />
      </Provider>
    );

    const emptyComment =  screen.getByTestId('empty-state-comments');
    expect(emptyComment).toBeInTheDocument();
  });
});
