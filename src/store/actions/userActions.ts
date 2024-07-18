import { createAction } from "@reduxjs/toolkit";
import { ItemBook } from "types/book";


//Books favorites
export const toggleFavoriteBook = createAction<ItemBook>('user/toggleFavoriteBook');
