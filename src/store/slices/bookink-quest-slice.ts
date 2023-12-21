import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {getBookQuest} from '../../services/thunk/get-booking-quest';
import { BookingQuest } from '../type-store';


type StateZBookingQuest ={
  quest: BookingQuest[] | null;
  isLoading: boolean;
  id: string;
}

const initialState: StateZBookingQuest = {
  quest: null,
  isLoading: false,
  id: ''
};

const bookingQuestSlice = createSlice({
  name: 'bookingQuest',
  initialState,
  reducers: {
    idBookingQuest(state, action: PayloadAction<string>) {
      state.id = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getBookQuest.fulfilled, (state, action: PayloadAction<BookingQuest[]>) => {
        state.quest = action.payload;
        state.isLoading = false;
        state.id = action.payload[0].id;
      })
      .addCase(getBookQuest.pending, (state) => {
        state.isLoading = true;
      });
  }
});

export {bookingQuestSlice};
