import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ResponseDataBooking, SendDataBooking, Thunk} from '../type-service';
import {ApiRoute} from '../../const';

const sendDataBooking = createAsyncThunk<ResponseDataBooking, SendDataBooking, Thunk>(
  'data/sendDataBooking',
  async ({questId, contactPerson, date , phone, peopleCount, placeId, time, withChildren}, {extra: api}) => {
    const {data} = await api.post<ResponseDataBooking>(`${ApiRoute.Quests}/${questId}${ApiRoute.Booking}`, {contactPerson, date , phone, peopleCount, placeId, time, withChildren});

    return data;
  },
);

export {sendDataBooking};
