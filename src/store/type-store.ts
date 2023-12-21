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

type kzff = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

type BookingTimeToday ={
    time: string;
    isAvailable: boolean;
};


type BookingQuest = {
  id: string;
  location: {
    address: string;
    coords: [number,number];
    };
  slots: {
    today: [BookingTimeToday];
    tomorrow: [
      {
        time: string;
        isAvailable: boolean;
      }
    ];
  };
}

type DataBooking = {
  time: string;
  day: string;
};


export type {State, AppDispatch, StateAuth, QuestCard, QuestPageCard, BookingQuest, BookingTimeToday, DataBooking};
