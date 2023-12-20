import type {QuestCard} from '../type-store';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {fetchQuestAction} from '../../services/thunk/fetch-question';


type StateQuest = {
  quest: QuestCard | null;
  loadingStatus: boolean | null;
  error: null | string;
}

const initialState: StateQuest = {
  quest: null,
  loadingStatus: null,
  error: null,
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    addQuestionList(state, action: PayloadAction<QuestCard>) {
      state.quest = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.quest = action.payload;
        state.loadingStatus = false;
        state.error = null;
      })
      .addCase(fetchQuestAction.pending, (state) => {
        state.loadingStatus = true;
        state.error = null;
      })
      .addCase(fetchQuestAction.rejected, (state, action) => {
        state.error = action.error.message || 'Unknown error';
        state.loadingStatus = false;
      });
  }
});

export {questionSlice};
