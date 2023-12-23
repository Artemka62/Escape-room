import { Navigate } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-store';

type RedirectProps = {
  children: JSX.Element;
}

function RedirectComponent ({children}: RedirectProps) {
  const authStatus = useAppSelector((state) => state.authorizationStatus.authStatus);

  return authStatus !== AuthorizationStatus.Auth ? <Navigate to={AppRoute.Login}/> : children;
}

export {RedirectComponent};
