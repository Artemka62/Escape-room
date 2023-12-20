import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiRoute} from '../../const';
import type {Thunk} from '../type-service';
import type {QuestCard} from '../../store/type-store';

const fetchQuestAction = createAsyncThunk<QuestCard, string, Thunk>(
  'data/fetchQuest',
  async (id, { extra: api}) => {
    const {data} = await api.get<QuestCard>(`${ApiRoute.Quests}/${id}`);

    return data;
  },
);

export{fetchQuestAction};
