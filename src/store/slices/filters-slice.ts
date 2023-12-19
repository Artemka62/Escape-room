import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {FiltersGenre} from '../../const';

type InitialState = {
  filterGenre: string;
}

const initialState: InitialState = {
  filterGenre: FiltersGenre.all,
};

const filtersSlice = createSlice({
  name: 'filterGenre',
  initialState,
  reducers: {
    filterGenre(state, action: PayloadAction<string>) {
      state.filterGenre = action.payload;
    }
  },
});

export {filtersSlice};
