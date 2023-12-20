import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NavigationComponent () {

  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link to={AppRoute.Main} className="link not-disabled" >
            Квесты
          </Link>
        </li>
        <li className="main-nav__item">
          <Link to={AppRoute.Contacts} className="link">
            Контакты
          </Link>
        </li>
        <li className="main-nav__item">
          <Link to={AppRoute.MyQuest} className="link ">
            Мои бронирования
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export {NavigationComponent};
