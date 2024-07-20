import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useAppSelector } from '../../store';
import { stateInitial } from '../../test-utils/storage/storage';
import CommentsList from './Comments';

jest.mock('@store/index', () => ({
  useAppSelector: jest.fn()
}));

const mockStore = configureStore([]);

const idComment = '/works/OL25520448W';

describe('CommentsList: suite', () => {
  beforeEach(() => {
    (useAppSelector as jest.Mock).mockReturnValue({
      comments: {}
    });
  });

  const setup = (state: any, bookId: string) => {
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <CommentsList bookId={bookId} />
      </Provider>
    );
  };

  test('CommentsList: should render with default styles and title', () => {
    setup(stateInitial, idComment);
    expect(screen.getByText('Comments')).toBeInTheDocument();
  });

  test('CommentsList: should show empty state when there are no comments', () => {
    setup(stateInitial, idComment);
    expect(screen.getByTestId('empty-state-comments')).toBeInTheDocument();
    expect(
      screen.getByText('No comments yet. Be the first to comment!')
    ).toBeInTheDocument();
  });

  test('CommentsList: should call useAppSelector with correct state', () => {
    const stateWithComments = {
      comments: {
        idComment: ['Great book!']
      }
    };
    setup(stateWithComments, idComment);
    expect(useAppSelector).toHaveBeenCalledWith(expect.any(Function));
  });
});
