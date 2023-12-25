import {deleteReservation} from '../../services/thunk/delete-reservation';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {StateDeleteReservation} from '../type-store';


const initialState: StateDeleteReservation = {
  error: null,
};

const deleteReservationSlice = createSlice({
  name: 'deleteReservation',
  initialState,
  reducers: {
    reservationError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(deleteReservation.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(deleteReservation.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        state.error = action.error.message || 'Unknown error';
      });
  }
});

export {deleteReservationSlice};

