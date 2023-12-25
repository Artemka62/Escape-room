import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {AppRoute} from '../../const';
import {StatePages} from '../type-store';

const initialState: StatePages = {
  page: AppRoute.Main,
  pageForLink: AppRoute.Main
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    page(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },
    pageForLink(state, action: PayloadAction<string>) {
      state.pageForLink = action.payload;
    }
  }
});

export {pageSlice};
