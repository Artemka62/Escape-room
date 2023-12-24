import {NavigationComponent} from '../../components/navigation-component/navigation-component';
import {CardsPlaceComponent} from '../../components/cards-place-component/cards-place-component';
import {useDocumentTitle} from '../../hooks/use-document-title';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import {fetchQuestsAction} from '../../services/thunk/fetch-quests';
import {FilterListGenreComponent} from '../../components/filter-list-genre/filter-list-genre';
import {FilterListLevelComponent} from '../../components/filter-list-level/filter-list-level';
import {useEffect} from 'react';
import {ProfileComponent} from '../../components/profile-component/profile-component';
import {AppRoute} from '../../const';
import {pageSlice} from '../../store/slices/pages-slice';
import {LoadingComponent} from '../../components/loading-component/loading-component';
import {checkAuthAction} from '../../services/thunk/check-auth-actions';
import {ErrorMessage} from '../../components/error-message/error-message';
import { FooterComponent } from '../../components/footer-component/footer-component';

type MainPagesProps = {
  title: string;
}

function MainPages ({title}: MainPagesProps) {
  const dispatch = useAppDispatch();
  const isLoadingAuth = useAppSelector((state)=> state.authorizationStatus.isLoadingAuth);
  const error = useAppSelector((state) => state.quests.error);

  useDocumentTitle(title);

  useEffect(() => {
    dispatch(fetchQuestsAction());
    dispatch(pageSlice.actions.pageForLink(AppRoute.Main));
    dispatch(checkAuthAction());
  }, []);

  if (isLoadingAuth) {
    return <LoadingComponent/>;
  }

  if(error !== null){
    return <ErrorMessage title ={AppRoute.Error}/>;
  }

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container container--size-l">
          <span className="logo header__logo">
            <svg width={134} height={52} aria-hidden="true">
              <use xlinkHref="#logo" />
            </svg>
          </span>
          <NavigationComponent/>
          <ProfileComponent/>
        </div>
      </header>
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
              квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
              Выберите тематику
            </h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <FilterListGenreComponent/>
              <FilterListLevelComponent/>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <CardsPlaceComponent/>
        </div>
      </main>
      <FooterComponent/>
    </div>
  );
}

export {MainPages};
