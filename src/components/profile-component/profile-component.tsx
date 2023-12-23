import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import { logoutAction } from '../../services/thunk/logout-action';
import { useEffect } from 'react';
import { checkAuthAction } from '../../services/thunk/check-auth-actions';

function ProfileComponent () {
  const authStatus = useAppSelector((state) => state.authorizationStatus.authStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //dispatch(checkAuthAction());
  }, []);

  function handleClickButtonOut () {

    if(authStatus === AuthorizationStatus.Auth) {

      dispatch(logoutAction()).unwrap().then(() => {
        // dispatch(fetchOffersAction());
        // dispatch(dataUserSlice.actions.addUserData(null));
        // dispatch(offerSlice.actions.addLoadOfferCard(null));
      }).then(() => {

        // if(currentPathname === AppRoute.Favorites.toString()){
        //   navigate(AppRoute.Login);
        // }
      });
    }
  }

  return (
    <div className="header__side-nav">
      <Link
        to={authStatus === AuthorizationStatus.Auth ? AppRoute.Main : AppRoute.Login}
        className={`${authStatus === AuthorizationStatus.Auth ? 'btn  header__side-item btn--accent' : 'btn  header__side-item'}`}
        onClick={handleClickButtonOut}
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
