import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {AppRoute} from '../../const';

type InitialState = {
  page: string;
}

const initialState: InitialState = {
  page: AppRoute.Main.toString(),
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    page(state, action: PayloadAction<string>) {
      state.page = action.payload;
    }
  }
});

export {pageSlice};
