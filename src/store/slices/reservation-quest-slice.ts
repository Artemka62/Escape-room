import {createSlice} from '@reduxjs/toolkit';
import {ResponseDataBooking} from '../../services/type-service';
import {getMyReservation} from '../../services/thunk/get-my-reservation';
import type {PayloadAction} from '@reduxjs/toolkit';

type StateReservationQuests = {
  quests: ResponseDataBooking[] | null;
  loadingStatus: boolean | null;
  error: null | string;
}

const initialState: StateReservationQuests = {
  quests: null,
  loadingStatus: null,
  error: null,
};

const reservationQuestsSlice = createSlice({
  name: 'reservationQuests',
  initialState,
  reducers: {
    reservationQuests(state, action: PayloadAction<ResponseDataBooking[]>) {
      state.quests = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMyReservation.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.loadingStatus = false;
        state.error = null;
      })
      .addCase(getMyReservation.pending, (state) => {
        state.loadingStatus = true;
        state.error = null;
      })
      .addCase(getMyReservation.rejected, (state, action) => {
        state.error = action.error.message || 'Unknown error';
        state.loadingStatus = false;
      });
  }
});

export {reservationQuestsSlice};

