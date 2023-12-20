import type {QuestPageCard} from '../type-store';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {fetchQuestAction} from '../../services/thunk/fetch-quest';

type StateQuest = {
  quest: QuestPageCard | null;
  loadingStatus: boolean | null;
  error: null | string;
}

const initialState: StateQuest = {
  quest: null,
  loadingStatus: null,
  error: null,
};

const questSlice = createSlice({
  name: 'quest',
  initialState,
  reducers: {
    addQuestionList(state, action: PayloadAction<QuestPageCard>) {
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

export {questSlice};
