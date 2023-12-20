import {NavigationComponent} from '../../components/navigation-component/navigation-component';
import {CardsPlaceComponent} from '../../components/cards-place-component/cards-place-component';
import {useDocumentTitle} from '../../hooks/use-document-title';
import {useAppDispatch} from '../../hooks/use-store';
import {checkAuthAction} from '../../services/thunk/check-auth-actions';
import {fetchQuestsAction} from '../../services/thunk/fetch-quests';
import {FilterListGenreComponent} from '../../components/filter-list-genre/filter-list-genre';
import {FilterListLevelComponent} from '../../components/filter-list-level/filter-list-level';
import { useEffect } from 'react';
import { ProfileComponent } from '../../components/profile-component/profile-component';


type MainPagesProps = {
  title: string;
}

function MainPages ({title}: MainPagesProps) {

  const dispatch = useAppDispatch();

  useDocumentTitle(title);
  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchQuestsAction());

  }, []);

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
      <footer className="footer">
        <div className="container container--size-l">
          <div className="socials">
            <ul className="socials__list">
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="#"
                  aria-label="Skype"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <svg
                    className="socials__icon socials__icon--default"
                    width={28}
                    height={28}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-skype-default" />
                  </svg>
                  <svg
                    className="socials__icon socials__icon--interactive"
                    width={28}
                    height={28}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-skype-interactive" />
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="#"
                  aria-label="ВКонтакте"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <svg
                    className="socials__icon socials__icon--default"
                    width={28}
                    height={28}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-vk-default" />
                  </svg>
                  <svg
                    className="socials__icon socials__icon--interactive"
                    width={28}
                    height={28}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-vk-interactive" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export {MainPages};
