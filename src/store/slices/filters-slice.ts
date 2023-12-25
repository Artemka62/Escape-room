import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {FilterGenre, FilterLevel} from '../../const';
import {FilterState} from '../type-store';

const initialState: FilterState = {
  filterGenre: FilterGenre.All,
  filterLevel: FilterLevel.Any
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterGenre(state, action: PayloadAction<string>) {
      state.filterGenre = action.payload;
    },
    filterLevel(state, action: PayloadAction<string>) {
      state.filterLevel = action.payload;
    },
  },
});

export {filtersSlice};
