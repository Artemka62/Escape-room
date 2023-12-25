import {useEffect} from 'react';
import {BookingCardQuestComponent} from '../../components/booking-card-quest-component/booking-card-quest-component';
import {LogotypeComponent} from '../../components/logotype-component/logotype-component';
import {NavigationComponent} from '../../components/navigation-component/navigation-component';
import {ProfileComponent} from '../../components/profile-component/profile-component';
import {useDocumentTitle} from '../../hooks/use-document-title';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import {getMyReservation} from '../../services/thunk/get-my-reservation';
import {useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {pageSlice} from '../../store/slices/pages-slice';
import {ErrorMessage} from '../../components/error-message/error-message';
import {FooterComponent} from '../../components/footer-component/footer-component';

type MyQuestsPagesProps = {
  title: string;
}

function MyQuestsPages({title}: MyQuestsPagesProps) {
  const stateReservation = useAppSelector((state) => state.reservationQuests.quests);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus.authStatus);
  const navigate = useNavigate();
  const isErrorServer = useAppSelector((state)=> state.reservationQuests.error);
  const deleteReservationError = useAppSelector((state)=> state.deleteReservation.error);

  useEffect(() => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }
  }, [authStatus, navigate]);

  useEffect(() => {
    dispatch(getMyReservation());
    dispatch(pageSlice.actions.page(AppRoute.MyQuest));
  },[]);

  useDocumentTitle(title);

  if(isErrorServer !== null || deleteReservationError !== null){
    return <ErrorMessage title ={AppRoute.Error}/>;
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
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-bg-size-m.jpg"
              srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
              width={1366}
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">
              Мои бронирования
            </h1>
            {stateReservation?.length === 0 ? <div>У вас нет забронированных квестов. </div> : ''}
          </div>
          <div className="cards-grid">
            {stateReservation?.map((quest) => <BookingCardQuestComponent key={quest.id} quest={quest}/>)}
          </div>
        </div>
      </main>
      <FooterComponent/>
    </div>
  );
}

export {MyQuestsPages};
