import type {QuestCard, StateQuests} from '../type-store';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {fetchQuestsAction} from '../../services/thunk/fetch-quests';

const initialState: StateQuests = {
  quests: null,
  loadingStatus: null,
  error: null,
};

const questsSlice = createSlice({
  name: 'quests',
  initialState,
  reducers: {
    addQuestsList(state, action: PayloadAction<QuestCard[]>) {
      state.quests = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.loadingStatus = false;
        state.error = null;
      })
      .addCase(fetchQuestsAction.pending, (state) => {
        state.loadingStatus = true;
        state.error = null;
      })
      .addCase(fetchQuestsAction.rejected, (state, action) => {
        state.error = action.error.message || 'Unknown error';
        state.loadingStatus = false;
      });
  }
});

export {questsSlice};

