import {LogotypeComponent} from '../../components/logotype-component/logotype-component';
import {NavigationComponent} from '../../components/navigation-component/navigation-component';
import {useDocumentTitle} from '../../hooks/use-document-title';
import {useForm} from 'react-hook-form';
import {loginAction} from '../../services/thunk/login-actions';
import {useAppDispatch} from '../../hooks/use-store';
import {checkAuthAction} from '../../services/thunk/check-auth-actions';
import {useEffect} from 'react';
import type {SubmitHandler} from 'react-hook-form';

type LoginPagesProps = {
  title: string;
};

type FormData = {
  email: string;
  password: string;
};

function LoginPages({title}: LoginPagesProps) {
  useDocumentTitle(title);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  },[]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(loginAction({login: data.email, password: data.password}));
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container container--size-l">
          <LogotypeComponent />
          <NavigationComponent />
          <div className="header__side-nav">
            <a
              className="link header__side-item header__phone-link"
              href="tel:88003335599"
            >
              8 (000) 111-11-11
            </a>
          </div>
        </div>
      </header>
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-size-m.jpg"
              srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form
              action="https://echo.htmlacademy.ru/"
              className="login-form"
              onSubmit={(event) =>void handleSubmit(onSubmit)(event)}
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">
                  Вход
                </h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">
                      E&nbsp;–&nbsp;mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Адрес электронной почты"
                      {...register('email', {
                        required: 'Адрес электронной почты обязателен',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Введите корректный адрес электронной почты',
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="error">{errors.email.message}</span>
                    )}
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">
                      Пароль
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Пароль"
                      {...register('password', {
                        required: 'Пароль обязателен',
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d).{3,15}$/,
                          message:
                            'Пароль должен содержать минимум одну букву и одну цифру, от 3 до 15 символов',
                        },
                      })}
                    />
                    {errors.password && (
                      <span className="error">{errors.password.message}</span>
                    )}
                  </div>
                </div>
                <button
                  className="btn btn--accent btn--general login-form__submit"
                  type="submit"
                >
                  Войти
                </button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input
                  type="checkbox"
                  id="id-order-agreement"
                  name="user-agreement"
                  required
                />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">
                  Я&nbsp;согласен с
                  <a
                    className="link link--active-silver link--underlined"
                    href="#"
                  >
                    правилами обработки персональных данных
                  </a>
                  &nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
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

export {LoginPages};
