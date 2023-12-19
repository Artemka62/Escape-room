import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import type {StateAuth} from '../type-store';
import {checkAuthAction} from '../../services/thunk/check-auth-actions';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: StateAuth = {
  authStatus: AuthorizationStatus.Unknown,
  error: null,
  isLoadingAuth: false,
  isLoadingLogout: false
};

const authStatusSlice = createSlice({
  name: 'authorizationStatus',
  initialState,
  reducers: {
    addUserStatus(state, action: PayloadAction<string>) {
      state.authStatus = action.payload;
    },
    addErrorStatus(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.isLoadingAuth = false;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.isLoadingAuth = false;
      })
      .addCase(checkAuthAction.pending, (state) => {
        state.isLoadingAuth = true;
      });
  }
});

export {authStatusSlice};
