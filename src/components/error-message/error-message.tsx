import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useDocumentTitle} from '../../hooks/use-document-title';

type OfferPagesProps = {
  title: string;
}

function ErrorMessage ({title} : OfferPagesProps): JSX.Element | null {
  useDocumentTitle(title);

  return(
    <div>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Booking}><p> Перейти на главную страницу</p></Link>
    </div>
  );
}

export {ErrorMessage};
