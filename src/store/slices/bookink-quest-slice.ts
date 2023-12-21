import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {getBookQuest} from '../../services/thunk/get-booking-quest';
import { BookingQuest } from '../type-store';


type StateZBookingQuest ={
  quest: BookingQuest[] | null;
}

const initialState: StateZBookingQuest = {
  quest: null
};

const bookingQuestSlice = createSlice({
  name: 'bookingQuest',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBookQuest.fulfilled, (state, action: PayloadAction<BookingQuest[]>) => {
        state.quest = action.payload;
      });
  }
});

export {bookingQuestSlice};
