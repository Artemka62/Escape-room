import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createApi} from '../services/api';
import {authStatusSlice} from './slices/auth-status-slice';
import {questionsSlice} from './slices/questions-slice';
import { filtersSlice } from './slices/filters-slice';

const reducer = combineReducers({
  [authStatusSlice.name]: authStatusSlice.reducer,
  [questionsSlice.name]: questionsSlice.reducer,
  [filtersSlice.name]: filtersSlice.reducer
});

const api = createApi();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export {store, reducer};
