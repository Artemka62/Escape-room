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
  peopleMinMax: [number, number];
}

type QuestPageCard = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: [number, number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
};

type BookingTime ={
  time: string;
  isAvailable: boolean;
};

type BookingLocation = {
  address: string;
  coords: [number, number];
};

type BookingSlots = {
  today: [BookingTime];
  tomorrow: [BookingTime];
};

type BookingQuest = {
  id: string;
  location: BookingLocation;
  slots: BookingSlots;
}

type DataBooking = {
  time: string;
  day: string;
};


export type {
  State,
  AppDispatch,
  StateAuth,
  QuestCard,
  QuestPageCard,
  BookingQuest,
  BookingTime as BookingTimeToday,
  DataBooking
};
