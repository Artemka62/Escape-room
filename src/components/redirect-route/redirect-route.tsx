import {AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-store';
import {LoadingComponent} from '../loading-component/loading-component';

type RedirectProps = {
  children: JSX.Element;
}

function RedirectComponent ({children}: RedirectProps) {
  const authStatus = useAppSelector((state) => state.authorizationStatus.authStatus);

  return authStatus === AuthorizationStatus.Unknown ? <LoadingComponent/> : children;
}

export {RedirectComponent};
