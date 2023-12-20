import {AxiosInstance} from 'axios';
import { AppDispatch, State } from '../store/type-store';

type Token = string;

type Thunk = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

type UserDataLogin = {
  id: number;
  email: string;
  token: string;
};

type AuthData = {
  login: string;
  password: string;
};

export type {Token, Thunk, User, UserDataLogin, AuthData};
