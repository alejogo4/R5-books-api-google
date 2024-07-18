import { createAction } from "@reduxjs/toolkit";


export const setSearchTerm = createAction<string>('search/setSearchTerm');