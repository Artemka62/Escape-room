import { useEffect } from 'react';
import {LogotypeComponent} from '../../components/logotype-component/logotype-component';
import {MapComponent} from '../../components/map-component/map-component';
import {NavigationComponent} from '../../components/navigation-component/navigation-component';
import {ProfileComponent} from '../../components/profile-component/profile-component';
import {useDocumentTitle} from '../../hooks/use-document-title';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import { getBookQuest } from '../../services/thunk/get-booking-quest';
import { useParams } from 'react-router-dom';
import { ButtonTimeBookingComponent } from '../../components/button-time-booking-component/button-time-booking-component';
import { bookingQuestSlice } from '../../store/slices/bookink-quest-slice';
import { LoadingComponent } from '../../components/loading-component/loading-component';
import { Day } from '../../const';
import { AddressComponent } from '../../components/address-component/address-component';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { fetchQuestAction } from '../../services/thunk/fetch-quest';

type BookingPagesProps = {
  title: string;
}


type FormData = {
  name: string;
  tel: string;
  people: string;
};




function BookingPages ({title}: BookingPagesProps) {
  const {id} = useParams<string>();
  const isLoading = useAppSelector((state) => state.bookingQuest.isLoading);
  useDocumentTitle(title);
  const questsNear = useAppSelector((state)=> state.bookingQuest.quest);
  const dispatch = useAppDispatch();
  const stateIdBookingQuest = useAppSelector((state)=> state.bookingQuest.id);
  const findDataQuest = questsNear?.find((quest)=> quest.id === stateIdBookingQuest);
  const quest = useAppSelector((state)=> state.quest.quest);

  useEffect(() => {
    dispatch(getBookQuest(id || ''));
    dispatch(fetchQuestAction(id || ''));
  }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();


  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };




  const validateNumberOfParticipants = (value:string) => {
    if (!value) {
      return 'Количество участников обязательно';
    }

    const minParticipants = quest?.peopleMinMax[0];
    const maxParticipants = quest?.peopleMinMax[1];

    if (minParticipants && +value < minParticipants) {
      return `Выберите как минимум ${minParticipants} участника(ов)`;
    }

    if (maxParticipants && +value > maxParticipants) {
      return `Выберите не более ${maxParticipants} участника(ов)`;
    }

    return true;
  };







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
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
              Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
              Маньяк
            </p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container">

                  <MapComponent offers={questsNear || []}/>

                </div>
              </div>
              <AddressComponent address={findDataQuest?.location.address || ''}/>
            </div>
          </div>
          <form
            className="booking-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
            onSubmit={(event) =>void handleSubmit(onSubmit)(event)}
          >
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Выбор даты и времени</legend>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Сегодня</legend>
                <div className="booking-form__date-inner-wrapper">


                  {findDataQuest?.slots.today.map((data) => <ButtonTimeBookingComponent key={data.time} data={data} day={Day.Today}/>)}

                </div>
              </fieldset>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Завтра</legend>
                <div className="booking-form__date-inner-wrapper">

                  {findDataQuest?.slots.tomorrow.map((data) => <ButtonTimeBookingComponent key={data.time} data={data} day={Day.Tomorrow}/>)}

                </div>
              </fieldset>
            </fieldset>
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Контактная информация</legend>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="name">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Имя"
                  {...register('name', {
                    required: 'Имя обязательно',
                    minLength: {
                      value: 1,
                      message: 'Имя должно содержать как минимум 1 символ',
                    },
                    maxLength: {
                      value: 15,
                      message: 'Имя должно содержать не более 15 символов',
                    },
                    pattern: {
                      value: /^[A-Za-zА-Яа-яЁё'\s-]+$/,
                      message: 'Введите корректное имя',
                    },
                  })}
                  aria-invalid={errors['name'] ? 'true' : 'false'}
                />
                {errors.name && (
                  <span className="error">{errors.name.message}</span>
                )}
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="tel">
                  Контактный телефон
                </label>
                <input
                  type="tel"
                  id="tel"
                  placeholder="Телефон"
                  {...register('tel', {
                    required: 'Телефон обязателен',
                    pattern: {
                      value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                      message: 'Введите телефон в формате +7 (000) 000-00-00 с пробелом перед началом скобки, и в конце скобки.',
                    },
                  })}
                  aria-invalid={errors.tel ? 'true' : 'false'}
                />
                {errors.tel && (
                  <span className="error">{errors.tel.message}</span>
                )}
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="person">
                  Количество участников
                </label>
                <input
                  type="number"
                  id="person"
                  placeholder="Количество участников"
                  required
                  {...register('people', { validate: validateNumberOfParticipants })}
                  aria-invalid={errors.people ? 'true' : 'false'}
                />
                {errors.people && (
                  <>
                    <br />
                    <span role="alert">{errors.people.message}</span>
                  </>
                )}
              </div>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                <input
                  type="checkbox"
                  id="children"
                  name="children"
                  defaultChecked=""
                />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">
                  Со&nbsp;мной будут дети
                </span>
              </label>
            </fieldset>
            <button
              className="btn btn--accent btn--cta booking-form__submit"
              type="submit"
            >
              Забронировать
            </button>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
              <input
                type="checkbox"
                id="id-order-agreement"
                name="user-agreement"
                required=""
              />
              <span className="custom-checkbox__icon">
                <svg width={20} height={17} aria-hidden="true">
                  <use xlinkHref="#icon-tick" />
                </svg>
              </span>
              <span className="custom-checkbox__label">
                Я&nbsp;согласен с
                <a className="link link--active-silver link--underlined" href="#">
                  правилами обработки персональных данных
                </a>
                &nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
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

export {BookingPages};
