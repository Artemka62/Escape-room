import {AuthorizationStatus, TitleDescription} from '../../const';
import {useAppSelector} from '../../hooks/use-store';
import {LoginPages} from '../../pages/login-pages/login-pages';

type RedirectProps = {
  children: JSX.Element;
}

function RedirectMyQuestComponent ({children}: RedirectProps) {
  const authStatus = useAppSelector((state) => state.authorizationStatus.authStatus);

  return authStatus !== AuthorizationStatus.Auth ? <LoginPages title={TitleDescription.LoginPage}/> : children;
}

export {RedirectMyQuestComponent};
