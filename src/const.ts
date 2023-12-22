const AUTH_TOKEN_KEY_NAME = 'escape-room-token';
const URL_SERVER = 'https://grading.design.htmlacademy.pro/v1/escape-room';
const REQUEST_TIMEOUT = 5000;
const DEFAULT_NULL = 0;

enum AppRoute {
  Main= '/',
  Booking = '/booking',
  Login = '/login',
  Quest = '/quest',
  MyQuest = '/my-quests',
  Contacts = '/contacts',
  Error = '/error'
}

enum TitleDescription {
  MainPage = 'Escape Room',
  BookingPage = 'Бронирование квеста - Escape Room',
  LoginPage = 'Авторизация - Escape Room',
  QuestPage = 'Квест - Escape Room',
  MyQuests = 'Мои бронирования - Escape Room',
  Contacts = 'Контакты - Escape Room',
  ErrorPage = 'Escape Room: error'
}

enum ApiRoute {
  Quests = '/quest',
  Reservation = '/reservation',
  Booking = '/booking',
  Login = '/login',
  Logout = '/logout'
 }

 enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

enum FilterGenre {
  All= 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

const LevelQuestRu = {
  Easy: 'легкий',
  Medium: 'средний',
  Hard: 'сложный'
} as const;

const GenreQuestRu = {
  Adventures: 'приключения',
  Horror:'ужасы',
  Mystic: 'мистика',
  Detective: 'детектив',
  SciFi: 'sci-fi'
}as const;

const FilterLevel = {
  Any: 'any',
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard'
} as const;

const Person = {
  Min: 0,
  Max: 1
} as const;

const Day = {
  Today: 'today',
  Tomorrow: 'tomorrow'
} as const;

const Map = {
  IconUrlActive: 'img/svg/pin-active.svg',
  IconUrlDefault: 'img/svg/pin-default.svg',
  IconSizeWidth: 23,
  IconSizeHeight:  42,
  IconAnchorWidth: 11.5,
  IconAnchorHeight: 42,
  Zoom: 10
} as const;


export {
  AUTH_TOKEN_KEY_NAME,
  URL_SERVER,
  REQUEST_TIMEOUT,
  DEFAULT_NULL,
  AppRoute,
  TitleDescription,
  ApiRoute,
  AuthorizationStatus,
  FilterGenre,
  LevelQuestRu,
  FilterLevel,
  Person,
  GenreQuestRu,
  Day,
  Map
};
