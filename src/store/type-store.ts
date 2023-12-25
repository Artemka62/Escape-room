import {ResponseDataBooking} from '../services/type-service';
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

type FilterState = {
  filterGenre: string;
  filterLevel : string;
}

type StatePages = {
  page: string;
  pageForLink: string;
}

type StateQuest = {
  quest: QuestPageCard | null;
  loadingStatus: boolean | null;
  error: null | string;
}

type StateQuests = {
  quests: QuestCard[] | null;
  loadingStatus: boolean | null;
  error: null | string;
}

type StateReservationQuests = {
  quests: ResponseDataBooking[] | null;
  loadingStatus: boolean | null;
  error: null | string;
}

type BookingQuest = {
  id: string;
  location: BookingLocation;
  slots: BookingSlots;
}

type StateDeleteReservation = {
  error: null | string;
}

type DataBooking = {
  time: string;
  day: string;
};

type StateZBookingQuest ={
  quest: BookingQuest[] | null;
  isLoading: boolean;
  id: string;
  data: DataBooking | null;
  isLoadingDataBooking: boolean;
  dataQuestBooking: ResponseDataBooking | null;
  error: boolean | string;
  errorServer: string | null;
}


export type {
  State,
  AppDispatch,
  StateAuth,
  QuestCard,
  StateDeleteReservation,
  QuestPageCard,
  FilterState,
  StatePages,
  StateQuest,
  StateQuests,
  StateReservationQuests,
  BookingQuest,
  BookingTime,
  DataBooking,
  StateZBookingQuest
};
