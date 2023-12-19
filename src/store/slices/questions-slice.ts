import type {QuestionCard} from '../type-store';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {fetchQuestionsAction} from '../../services/thunk/fetch-questions';

type StateOffers = {
  questions: QuestionCard[] | null;
  loadingStatus: boolean | null;
  error: null | string;
}

const initialState: StateOffers = {
  questions: null,
  loadingStatus: null,
  error: null,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addOfferList(state, action: PayloadAction<QuestionCard[]>) {
      state.questions = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestionsAction.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.loadingStatus = false;
        state.error = null;
      })
      .addCase(fetchQuestionsAction.pending, (state) => {
        state.loadingStatus = true;
        state.error = null;
      })
      .addCase(fetchQuestionsAction.rejected, (state, action) => {
        state.error = action.error.message || 'Unknown error';
        state.loadingStatus = false;
      });
  }
});

export {questionsSlice};

