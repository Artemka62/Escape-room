import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import {logoutAction} from '../../services/thunk/logout-action';
import { pageSlice } from '../../store/slices/pages-slice';


function ProfileComponent () {
  const authStatus = useAppSelector((state) => state.authorizationStatus.authStatus);
  const dispatch = useAppDispatch();

  function handleClickButton () {
    if(authStatus === AuthorizationStatus.Auth) {
      dispatch(pageSlice.actions.page(AppRoute.Quest));
      dispatch(logoutAction());
    }
  }

  return (
    <div className="header__side-nav">
      <Link
        to={authStatus === AuthorizationStatus.Auth ? AppRoute.Main : AppRoute.Login}
        className={`${authStatus === AuthorizationStatus.Auth ? 'btn  header__side-item btn--accent' : 'btn  header__side-item header__login-btn'}`}
        onClick={handleClickButton}
      >
        {authStatus === AuthorizationStatus.Auth ? 'Выйти' : 'Вход'}
      </Link>
      <a
        className="link header__side-item header__phone-link"
        href="tel:88003335599"
      >
        8 (000) 111-11-11
      </a>
    </div>
  );
}

export {ProfileComponent};
