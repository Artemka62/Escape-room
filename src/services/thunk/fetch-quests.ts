import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiRoute} from '../../const';
import type {Thunk} from '../type-service';
import type {QuestCard} from '../../store/type-store';

const fetchQuestsAction = createAsyncThunk<QuestCard[], undefined, Thunk>(
  'data/fetchQuests',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<QuestCard[]>(ApiRoute.Quests);

    return data;
  },
);

export{fetchQuestsAction};
