import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {getBookQuest} from '../../services/thunk/get-booking-quest';
import { BookingQuest, DataBooking } from '../type-store';
import { sendDataBooking } from '../../services/thunk/send-data-booking';
import { ResponseDataBooking } from '../../services/type-service';

type StateZBookingQuest ={
  quest: BookingQuest[] | null;
  isLoading: boolean;
  id: string;
  data: DataBooking | null;
  isLoadingDataBooking: boolean;
  dataQuestBooking: ResponseDataBooking | null;
  error: boolean | string;
}

const initialState: StateZBookingQuest = {
  quest: null,
  isLoading: false,
  id: '',
  data: null,
  isLoadingDataBooking: false,
  dataQuestBooking: null,
  error: false
};

const bookingQuestSlice = createSlice({
  name: 'bookingQuest',
  initialState,
  reducers: {
    idBookingQuest(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    dataBooking(state, action: PayloadAction<DataBooking>) {
      state.data = action.payload;
    },
    errorBooking(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
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
      })
      .addCase(sendDataBooking.fulfilled, (state, action: PayloadAction<ResponseDataBooking>) => {
        state.dataQuestBooking = action.payload;
        state.isLoadingDataBooking = false;
        state.error = false;
      })
      .addCase(sendDataBooking.pending, (state) => {
        state.isLoadingDataBooking = true;
        state.error = false;
      })
      .addCase(sendDataBooking.rejected, (state) => {
        state.error = 'Произошла ошибка проверьте заполненные данные';
      });
  }
});

export {bookingQuestSlice};
