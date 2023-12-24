import {useEffect} from 'react';
import {LogotypeComponent} from '../../components/logotype-component/logotype-component';
import {MapComponent} from '../../components/map-component/map-component';
import {NavigationComponent} from '../../components/navigation-component/navigation-component';
import {ProfileComponent} from '../../components/profile-component/profile-component';
import {AppRoute} from '../../const';
import {useDocumentTitle} from '../../hooks/use-document-title';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import {mockPoint} from '../../mock/mock';
import {pageSlice} from '../../store/slices/pages-slice';
import {LoadingComponent} from '../../components/loading-component/loading-component';
import {ErrorMessage} from '../../components/error-message/error-message';
import {fetchQuestsAction} from '../../services/thunk/fetch-quests';
import {FooterComponent} from '../../components/footer-component/footer-component';

type ContactsPagesProps = {
  title: string;
}

function ContactsPages ({title}: ContactsPagesProps) {
  const dispatch = useAppDispatch();
  const isLoadingAuth = useAppSelector((state)=> state.authorizationStatus.isLoadingAuth);
  const error = useAppSelector((state) => state.quests.error);

  useEffect(() => {
    dispatch(pageSlice.actions.pageForLink(AppRoute.Contacts));
    dispatch(pageSlice.actions.page(AppRoute.Contacts));
    dispatch(fetchQuestsAction());
  },[]);

  useDocumentTitle(title);

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
          <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
            <p className="subtitle page-content__subtitle">
              квесты в&nbsp;Санкт-Петербурге
            </p>
            <h1 className="title title--size-m page-content__title">Контакты</h1>
          </div>
          <div className="contacts">
            <dl className="contacts__list">
              <div className="contacts__item">
                <dt className="contacts__dt">Адрес</dt>
                <dd className="contacts__dd">
                  <address className="contacts__address">
                    Санкт-Петербург,
                    <br /> Набережная реки Карповка, д 5П
                  </address>
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Режим работы</dt>
                <dd className="contacts__dd">
                  Ежедневно, с&nbsp;10:00 до&nbsp;22:00
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Телефон</dt>
                <dd className="contacts__dd">
                  <a className="link" href="tel:88003335599">
                    8 (000) 111-11-11
                  </a>
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">E–mail</dt>
                <dd className="contacts__dd">
                  <a className="link" href="mailto:info@escape-room.ru">
                    info@escape-room.ru
                  </a>
                </dd>
              </div>
            </dl>
            <div className="contacts__map">
              <div className="map">
                <MapComponent points={mockPoint}/>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterComponent/>
    </div>
  );
}

export {ContactsPages};
