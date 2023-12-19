import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function LogotypeComponent () {
  return(
    <Link to={AppRoute.Main}
      className="logo header__logo"
      aria-label="Перейти на Главную"
    >
      <svg width={134} height={52} aria-hidden="true">
        <use xlinkHref="#logo"/>
      </svg>
    </Link>
  );
}

export {LogotypeComponent};
