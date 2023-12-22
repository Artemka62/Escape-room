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

type SendDataBooking = {
  questId: string;
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

type ResponseDataBooking ={

    date: string;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number;
    id: string;
    location: {
      address: string;
      coords: [number];
    };
    quest: {
      id: string;
      title: string;
      previewImg: string;
      previewImgWebp: string;
      level: string;
      type: string;
      peopleMinMax: [number, number] | [number];
  };
}

export type {Token, Thunk, User, UserDataLogin, AuthData, SendDataBooking, ResponseDataBooking};
