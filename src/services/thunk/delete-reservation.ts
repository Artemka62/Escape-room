import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiRoute} from '../../const';
import type {Thunk} from '../type-service';

const deleteReservation = createAsyncThunk<string, string, Thunk>(
  'deleteReservation',
  async (id, {extra: api}) => {
    const {data} = await api.delete<string>(`${ApiRoute.Reservation}/${id}`);

    return data;
  },
);

export{deleteReservation};
