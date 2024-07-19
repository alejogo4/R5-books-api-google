import Button from '@components/Button/Button';
import CommentsList from '@components/Comments/Comments';
import FavoriteButton from '@components/Favorite/Favorite';
import { addComment } from '@store/actions/commentsActions';
import { useAppDispatch, useAppSelector } from '@store/index';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState('');

  const dispatch = useAppDispatch();
  const { bookDetail: book } = useAppSelector(state => state.books);

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    dispatch(
      addComment({
        bookId: id ?? '',
        comment
      })
    );
    setComment('');
  };

  return (
    <>
      {book && (
        <div className='max-w-4xl mx-auto p-4 my-4 items-center'>
          <div className='bg-white shadow-2xl rounded-lg overflow-hidden relative'>
            <FavoriteButton allowAddFavorites={true} book={book} className='top-4 right-4' />
            <div className='p-4'>
              <h1 className='text-2xl font-bold mb-2'>
                {book.volumeInfo.title}
              </h1>
              <h2 className='text-lg text-gray-700 mb-2'>
                {book.volumeInfo.subtitle}
              </h2>
              <p className='text-gray-700 mb-4'>
                {book.volumeInfo.description}
              </p>
              {book.volumeInfo.imageLinks?.thumbnail && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={`${book.volumeInfo.title} thumbnail`}
                  className='w-32 h-48 mb-4'
                />
              )}
              <div className='mb-4'>
                <h3 className='text-lg font-semibold'>Authors:</h3>
                <ul className='list-disc list-inside'>
                  {book.volumeInfo.authors.map(author => (
                    <li key={author}>{author}</li>
                  ))}
                </ul>
              </div>
              <div className='mb-4'>
                <h3 className='text-lg font-semibold'>Publisher:</h3>
                <p>{book.volumeInfo.publisher}</p>
              </div>
              <div className='mb-4'>
                <h3 className='text-lg font-semibold'>Published Date:</h3>
                <p>{book.volumeInfo.publishedDate}</p>
              </div>
            </div>
            <div className='p-4 bg-gray-100'>
              <h3 className='text-lg font-semibold mb-2'>Leave a Comment:</h3>
              <textarea
                className='w-full p-2 mb-2 border rounded'
                rows={4}
                value={comment}
                onChange={handleCommentChange}
              />
              <Button
                variant='primary'
                disabled={!comment}
                onClick={handleCommentSubmit}
              >
                Submit Comment
              </Button>
            </div>
          </div>
        </div>
      )}
      <CommentsList bookId={id ?? ''} />
    </>
  );
};

export default BookDetail;
