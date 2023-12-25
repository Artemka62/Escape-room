const AUTH_TOKEN_KEY_NAME = 'escape-room-token';
const URL_SERVER = 'https://grading.design.htmlacademy.pro/v1/escape-room';
const REQUEST_TIMEOUT = 5000;
const DEFAULT_NULL = 0;
const VALIDATION_AGREEMENT = 'Вы должны согласиться cпользовательским соглашением для продолжения';
const FORMAT_TIME = 10;

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

const ValidationName = {
  MinLength: {
    value: 1,
    message: 'Имя должно содержать как минимум 1 символ',
  },
  MaxLength: {
    value: 15,
    message: 'Имя должно содержать не более 15 символов',
  },
  Pattern: {
    value: /^[A-Za-zА-Яа-яЁё'\s-]+$/,
    message: 'Введите корректное имя',
  },
  Required: 'Имя обязательно',

} as const;

const ValidationTelephone = {
  Value: /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
  Message: 'Введите телефон в формате +7(000)000-00-00',
  Required: 'Телефон обязателен'
} as const;

const ValidationEmail = {
  Required: 'Адрес электронной почты обязателен',
  Pattern: {
    value: /\S+@\S+\.\S+/,
    message: 'Введите корректный адрес электронной почты',
  }
} as const;

const ValidationPassword = {
  Required: 'Пароль обязателен',
  Pattern: {
    value: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d).{3,15}$/,
    message:
      'Пароль должен содержать минимум одну букву и одну цифру, от 3 до 15 символов',
  },
} as const;

const ValidationParticipant = {
  Message: 'Количество участников обязательно',
  MessageMin: 'Выберите как минимум',
  MessageMax: 'Выберите не более',
  MessageEnding: 'участника(ов)'
} as const;

export {
  AUTH_TOKEN_KEY_NAME,
  URL_SERVER,
  REQUEST_TIMEOUT,
  DEFAULT_NULL,
  VALIDATION_AGREEMENT,
  FORMAT_TIME,
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
  Map,
  ValidationName,
  ValidationTelephone,
  ValidationEmail,
  ValidationPassword,
  ValidationParticipant
};
