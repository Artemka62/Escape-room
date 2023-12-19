enum AppRoute {
  Main= '/',
  Booking = '/booking',
  Login = '/login',
  Favorites = '/favorites',
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
  Offers = '/offers',
  OffersFavorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
 }


 enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const AUTH_TOKEN_KEY_NAME = 'escape-room-token';
const URL_SERVER = 'https://grading.design.htmlacademy.pro/v1/escape-room';
const REQUEST_TIMEOUT = 5000;

export {
  AppRoute,
  TitleDescription,
  ApiRoute,
  AuthorizationStatus,
  AUTH_TOKEN_KEY_NAME,
  URL_SERVER,
  REQUEST_TIMEOUT
};
