import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createApi} from '../services/api';
import {authStatusSlice} from './slices/auth-status-slice';
import {questionsSlice} from './slices/questions-slice';

const reducer = combineReducers({
  [authStatusSlice.name]: authStatusSlice.reducer,
  [questionsSlice.name]: questionsSlice.reducer
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
