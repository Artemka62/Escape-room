import {Link, useParams} from 'react-router-dom';
import {LogotypeComponent} from '../../components/logotype-component/logotype-component';
import {NavigationComponent} from '../../components/navigation-component/navigation-component';
import {useDocumentTitle} from '../../hooks/use-document-title';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import {fetchQuestAction} from '../../services/thunk/fetch-quest';
import {useEffect} from 'react';
import {AppRoute, AuthorizationStatus, Person} from '../../const';
import {setLevel, setGenre} from '../../utils';
import {ProfileComponent} from '../../components/profile-component/profile-component';
import {getBookQuest} from '../../services/thunk/get-booking-quest';


type QuestPagesProps = {
  title: string;
}

function QuestPages ({title}: QuestPagesProps) {
  const {id} = useParams<string>();
  const dispatch = useAppDispatch();
  const quest = useAppSelector((state)=> state.quest.quest);
  const authStatus = useAppSelector((state)=> state.authorizationStatus.authStatus);


  useDocumentTitle(title);

  useEffect(() => {

    if (id) {
      dispatch(fetchQuestAction(id));
    }
  },[]);


  function handleClick () {
    dispatch(getBookQuest(quest?.id || ''));
  }

  return(
    <div className="wrapper">
      <header className="header">
        <div className="container container--size-l">

          <LogotypeComponent/>
          <NavigationComponent/>

          <ProfileComponent/>

        </div>
      </header>
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={`${quest?.previewImgWebp ?? ''} ${quest?.coverImgWebp ?? ''} 2x`}
            />
            <img
              src={quest?.previewImg}
              srcSet={`${quest?.coverImg ?? ''} 2x`}
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {quest?.title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>{setGenre(quest?.type ?? '')}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {`${quest?.peopleMinMax[Person.Min] ?? ''}–${quest?.peopleMinMax[Person.Max] ?? ''}`} чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {setLevel(quest?.level ?? '')}
              </li>
            </ul>
            <p className="quest-page__description">
              {quest?.description}
            </p>
            <Link to={authStatus === AuthorizationStatus.Auth ? `${AppRoute.Quest}/${quest?.id ?? ''}${AppRoute.Booking}` : AppRoute.Login}
              className="btn btn--accent btn--cta quest-page__btn"
              onClick={handleClick}
            >
              Забронировать
            </Link>
          </div>
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

export {QuestPages};
