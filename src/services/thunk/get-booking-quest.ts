import type {Thunk} from '../type-service';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiRoute} from '../../const';
import {BookingQuest} from '../../store/type-store';

const getBookQuest = createAsyncThunk<BookingQuest[], string, Thunk>(
  'getBookQuest',
  async (id, {extra: api}) => {
    const {data} = await api.get<BookingQuest[]>(`${ApiRoute.Quests}/${id}${ApiRoute.Booking}`);

    return data;
  },
);

export {getBookQuest};
