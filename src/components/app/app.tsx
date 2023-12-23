import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, TitleDescription} from '../../const';
import {BookingPages} from '../../pages/booking-pages/booking-pages';
import {ErrorMessage} from '../error-message/error-message';
import {MainPages} from '../../pages/main-pages/main-pages';
import {LoginPages} from '../../pages/login-pages/login-pages';
import {QuestPages} from '../../pages/quest-pages/quest-pages';
import {MyQuestsPages} from '../../pages/my-quests-pages/my-quests-pages';
import {ContactsPages} from '../../pages/contacts-pages/contacts-pages';
import { AuthorizationRoute } from '../authorization-route/authorization-route';
import { RedirectComponent } from '../redirect-route/redirect-route';
import { useAppDispatch } from '../../hooks/use-store';
import { checkAuthAction } from '../../services/thunk/check-auth-actions';
import { fetchQuestsAction } from '../../services/thunk/fetch-quests';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(fetchQuestsAction());
  dispatch(checkAuthAction());
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
            <AuthorizationRoute>
              <LoginPages title = {TitleDescription.LoginPage}/>
            </AuthorizationRoute>
          }
        />
        <Route
          path={`${AppRoute.Quest}/:id`}
          element ={
            <QuestPages title = {TitleDescription.QuestPage}/>
          }
        />
        <Route
          path={`${AppRoute.MyQuest}`}
          element ={
            <RedirectComponent>
              <MyQuestsPages title = {TitleDescription.MyQuests}/>
            </RedirectComponent>
          }
        />
        <Route
          path={`${AppRoute.Quest}/:id${AppRoute.Booking}`}
          element ={
            <RedirectComponent>
              <BookingPages title = {TitleDescription.BookingPage}/>
            </RedirectComponent>
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
