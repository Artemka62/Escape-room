import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createApi} from '../services/api';
import {authStatusSlice} from './slices/auth-status-slice';
import {questsSlice} from './slices/questions-slice';
import {filtersSlice} from './slices/filters-slice';
import {questionSlice} from './slices/quest-slice';


const reducer = combineReducers({
  [authStatusSlice.name]: authStatusSlice.reducer,
  [questsSlice.name]: questsSlice.reducer,
  [filtersSlice.name]: filtersSlice.reducer,
  [questionSlice.name]: questionSlice.reducer
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
