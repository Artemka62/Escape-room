import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, TitleDescription} from '../../const';
import {BookingPages} from '../../pages/booking-pages/booking-pages';
import {ErrorMessage} from '../error-message/error-message';
import {MainPages} from '../../pages/main-pages/main-pages';
import {LoginPages} from '../../pages/login-pages/login-pages';
import {QuestPages} from '../../pages/quest-pages/quest-pages';
import {MyQuestsPages} from '../../pages/my-quests-pages/my-quests-pages';
import {ContactsPages} from '../../pages/contacts-pages/contacts-pages';

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`${AppRoute.Main}`}
          element ={
            <MainPages title = {TitleDescription.MainPage}/>
          }
        />
        <Route
          path={`${AppRoute.Login}`}
          element ={
            <LoginPages title = {TitleDescription.LoginPage}/>
          }
        />
        <Route
          path={`${AppRoute.Quest}`}
          element ={
            <QuestPages title = {TitleDescription.QuestPage}/>
          }
        />
        <Route
          path={`${AppRoute.MyQuest}`}
          element ={
            <MyQuestsPages title = {TitleDescription.MyQuests}/>
          }
        />
        <Route
          path={`${AppRoute.Booking}`}
          element ={
            <BookingPages title = {TitleDescription.BookingPage}/>
          }
        />
        <Route
          path={`${AppRoute.Contacts}`}
          element ={
            <ContactsPages title = {TitleDescription.Contacts}/>
          }
        />
        <Route
          path={AppRoute.Error}
          element ={<ErrorMessage title = {TitleDescription.ErrorPage}/>}
        />
        <Route
          path="*"
          element={<ErrorMessage title = {TitleDescription.ErrorPage}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export {App};
