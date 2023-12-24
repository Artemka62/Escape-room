import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useDocumentTitle} from '../../hooks/use-document-title';
import {useAppDispatch} from '../../hooks/use-store';
import {checkAuthAction} from '../../services/thunk/check-auth-actions';
import {fetchQuestsAction} from '../../services/thunk/fetch-quests';

type OfferPagesProps = {
  title: string;
}

function ErrorMessage ({title} : OfferPagesProps): JSX.Element | null {
  useDocumentTitle(title);
  const dispatch = useAppDispatch();

  function handleClick () {
    dispatch(checkAuthAction());
    dispatch(fetchQuestsAction());
  }

  return(
    <div>
      <h1 >404 Not Found</h1>
      <Link to={AppRoute.Main}><p onClick={handleClick}> Перейти на главную страницу</p></Link>
    </div>
  );
}

export {ErrorMessage};
