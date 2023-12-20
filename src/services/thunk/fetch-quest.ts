import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiRoute} from '../../const';
import type {Thunk} from '../type-service';
import type {QuestPageCard} from '../../store/type-store';

const fetchQuestAction = createAsyncThunk<QuestPageCard, string, Thunk>(
  'data/fetchQuest',
  async (id, {extra: api}) => {
    const {data} = await api.get<QuestPageCard>(`${ApiRoute.Quests}/${id}`);

    return data;
  },
);

export{fetchQuestAction};
