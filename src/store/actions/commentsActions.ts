import { createAction } from '@reduxjs/toolkit';

export const addComment = createAction<{ bookId: string, comment: string }>('comments/addComment');
export const getCommentsByBookId = createAction<string>('comments/getCommentsByBookId');