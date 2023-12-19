import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiRoute} from '../../const';
import type {Thunk} from '../type-service';
import type {QuestionCard} from '../../store/type-store';

const fetchQuestionsAction = createAsyncThunk<QuestionCard[], undefined, Thunk>(
  'data/fetchQuestions',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<QuestionCard[]>(ApiRoute.Quests);

    return data;
  },
);

export{fetchQuestionsAction};
