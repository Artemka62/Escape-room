import {store} from '../store/index';

type State = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type StateAuth = {
  authStatus: string;
  error: string | null;
  isLoadingAuth: boolean;
  isLoadingLogout: boolean;
};

type QuestCard = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
}

type QuestPageCard = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

type BookingQuest = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}


export type {State, AppDispatch, StateAuth, QuestCard, QuestPageCard, BookingQuest};
