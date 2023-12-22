import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-store';


type AuthorizationRouteProps = {
  children: JSX.Element;
}

function AuthorizationRoute ({children}: AuthorizationRouteProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus.authStatus);
  const page = useAppSelector((state) => state.page.page);

  return authStatus === AuthorizationStatus.Auth.toString() ? <Navigate to={page}/> : children;
}

export {AuthorizationRoute};
