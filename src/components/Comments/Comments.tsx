import { useAppSelector } from '@store/index';
import { CommentsState } from '@store/reducers/commentsReducer';
import React from 'react';

interface CommentProps {
  bookId: string;
}

const CommentsList: React.FC<CommentProps> = ({ bookId }) => {
  const state = useAppSelector(state => state.comments);

  const getCommentsById = (state: CommentsState, id: string): string[] => {
    return state[id] || [];
  };

  const comments = getCommentsById(state, bookId);

  return (
    <div className='max-w-4xl mx-auto p-4 mt-4'>
      <h2 className='text-2xl font-bold mb-4'>Comments</h2>
      <div className='bg-white shadow-2xl rounded-lg overflow-hidden'>
        {comments.length === 0 ? (
          <div className='p-4 text-gray-700' data-testid='empty-state-comments'>
            No comments yet. Be the first to comment!
          </div>
        ) : (
          comments.map((comment, i) => (
            <div key={i} className='p-4 border-b last:border-b-0'>
              <p className='text-gray-800'>{comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentsList;
