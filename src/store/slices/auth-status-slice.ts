import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import type {StateAuth} from '../type-store';
import {checkAuthAction} from '../../services/thunk/check-auth-actions';
import type {PayloadAction} from '@reduxjs/toolkit';
import {loginAction} from '../../services/thunk/login-actions';
import {logoutAction} from '../../services/thunk/logout-action';

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
    userStatus(state, action: PayloadAction<string>) {
      state.authStatus = action.payload;
    },
    errorStatus(state, action: PayloadAction<string | null>) {
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
        state.error = null;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.error = null;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.isLoadingLogout = false;
      })
      .addCase(logoutAction.pending, (state) => {
        state.isLoadingLogout = true;
      });
  }
});

export {authStatusSlice};
