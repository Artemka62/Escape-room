import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useDocumentTitle} from '../../hooks/use-document-title';
import {useAppDispatch} from '../../hooks/use-store';
import {checkAuthAction} from '../../services/thunk/check-auth-actions';
import {fetchQuestsAction} from '../../services/thunk/fetch-quests';
import { pageSlice } from '../../store/slices/pages-slice';

type OfferPagesProps = {
  title: string;
}

function ErrorMessage ({title} : OfferPagesProps): JSX.Element | null {
  const dispatch = useAppDispatch();

  useDocumentTitle(title);

  function handleButtonClick () {
    dispatch(checkAuthAction());
    dispatch(fetchQuestsAction());
    dispatch(pageSlice.actions.page(AppRoute.Main));

  }

  return(
    <div>
      <h1 >404 Not Found</h1>
      <Link to={AppRoute.Main}><p onClick={handleButtonClick}>Перейти на главную страницу</p></Link>
    </div>
  );
}

export {ErrorMessage};
