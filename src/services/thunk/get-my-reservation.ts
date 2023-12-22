import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiRoute} from '../../const';
import type {ResponseDataBooking, Thunk} from '../type-service';

const getMyReservation = createAsyncThunk<ResponseDataBooking[], undefined, Thunk>(
  'data/fetchMyReservation',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<ResponseDataBooking[]>(ApiRoute.Reservation);

    return data;
  },
);

export{getMyReservation};
