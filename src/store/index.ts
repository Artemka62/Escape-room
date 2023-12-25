import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createApi} from '../services/api';
import {authStatusSlice} from './slices/auth-status-slice';
import {questsSlice} from './slices/quests-slice';
import {filtersSlice} from './slices/filters-slice';
import {questSlice} from './slices/quest-slice';
import { bookingQuestSlice } from './slices/booking-quest-slice';
import { reservationQuestsSlice } from './slices/reservation-quest-slice';
import { pageSlice } from './slices/pages-slice';


const reducer = combineReducers({
  [authStatusSlice.name]: authStatusSlice.reducer,
  [questsSlice.name]: questsSlice.reducer,
  [filtersSlice.name]: filtersSlice.reducer,
  [questSlice.name]: questSlice.reducer,
  [bookingQuestSlice.name]: bookingQuestSlice.reducer,
  [reservationQuestsSlice.name]: reservationQuestsSlice.reducer,
  [pageSlice.name]: pageSlice.reducer
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
