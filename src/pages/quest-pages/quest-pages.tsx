import {Link,useParams} from 'react-router-dom';
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
import {LoadingComponent} from '../../components/loading-component/loading-component';
import {pageSlice} from '../../store/slices/pages-slice';
import {ErrorMessage} from '../../components/error-message/error-message';
import {FooterComponent} from '../../components/footer-component/footer-component';

type QuestPagesProps = {
  title: string;
}

function QuestPages ({title}: QuestPagesProps) {
  const {id} = useParams<string>();
  const dispatch = useAppDispatch();
  const quest = useAppSelector((state)=> state.quest.quest);
  const authStatus = useAppSelector((state)=> state.authorizationStatus.authStatus);
  const isLoadingQuest = useAppSelector((state)=> state.quest.loadingStatus);
  const isError = useAppSelector((state)=> state.quest.error);

  useEffect(() => {
    dispatch(pageSlice.actions.pageForLink(`${AppRoute.Quest}/${id || ''}`));

    if (id) {
      dispatch(fetchQuestAction(id));
    }
  },[]);

  useDocumentTitle(title);

  function handleButtonClick () {
    dispatch(getBookQuest(quest?.id || ''));
  }

  if(isLoadingQuest) {
    return <LoadingComponent/>;
  }

  if(isError !== null) {
    return <ErrorMessage title={AppRoute.Error}/>;
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
              srcSet={`${quest?.previewImgWebp ?? ''}, ${quest?.coverImgWebp ?? ''} 2x`}
            />
            <img
              src={quest?.previewImg}
              srcSet={`${quest?.previewImg ?? ''} 2x`}
              width={1366}
              height={768}
              alt={quest?.title}
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
              onClick={handleButtonClick}
            >
              Забронировать
            </Link>
          </div>
        </div>
      </main>
      <FooterComponent/>
    </div>
  );
}

export {QuestPages};
