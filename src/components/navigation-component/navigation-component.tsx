import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import {pageSlice} from '../../store/slices/pages-slice';


function NavigationComponent () {
  const isAuth = useAppSelector((state) => state.authorizationStatus.authStatus);
  const statusPage = useAppSelector((state) => state.page.page);
  const dispatch = useAppDispatch();

  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className= "main-nav__item " onClick={() => dispatch(pageSlice.actions.page(AppRoute.Main))}>
          <Link to={AppRoute.Main} className={statusPage === AppRoute.Main ? 'link not-disabled active' : 'link '}>
            Квесты
          </Link>
        </li>
        <li className="main-nav__item" onClick={() => dispatch(pageSlice.actions.page(AppRoute.Contacts))}>
          <Link to={AppRoute.Contacts} className={statusPage === AppRoute.Contacts ? 'link not-disabled active' : 'link '} >
            Контакты
          </Link>
        </li>
        {isAuth === AuthorizationStatus.Auth ?
          <li className="main-nav__item" onClick={() => dispatch(pageSlice.actions.page(AppRoute.MyQuest))}>
            <Link to={AppRoute.MyQuest} className={statusPage === AppRoute.MyQuest ? 'link not-disabled active' : 'link '} >
            Мои бронирования
            </Link>
          </li>
          : ''}
      </ul>
    </nav>
  );
}

export {NavigationComponent};
