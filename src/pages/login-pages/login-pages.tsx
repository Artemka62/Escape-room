import {LogotypeComponent} from '../../components/logotype-component/logotype-component';
import {NavigationComponent} from '../../components/navigation-component/navigation-component';
import {useDocumentTitle} from '../../hooks/use-document-title';
import {useForm} from 'react-hook-form';
import {loginAction} from '../../services/thunk/login-actions';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import {ErrorMessage} from '../../components/error-message/error-message';
import {AppRoute, VALIDATION_AGREEMENT, ValidationEmail, ValidationPassword} from '../../const';
import {useEffect} from 'react';
import {fetchQuestsAction} from '../../services/thunk/fetch-quests';
import type {SubmitHandler} from 'react-hook-form';
import {FooterComponent} from '../../components/footer-component/footer-component';
import '../login-pages/login-pages.css';

type LoginPagesProps = {
  title: string;
};

type FormData = {
  email: string;
  password: string;
  userAgreement: boolean;
};

function LoginPages({title}: LoginPagesProps) {
  const dispatch = useAppDispatch();
  const isError = useAppSelector((state) => state.authorizationStatus.error);
  const isErrorServer = useAppSelector((state)=> state.quests.error);

  useEffect(() => {
    dispatch(fetchQuestsAction());
  }, []);

  useDocumentTitle(title);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      userAgreement: false
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(loginAction({login: data.email, password: data.password}));
  };

  if(isError !== null || isErrorServer !== null){
    return <ErrorMessage title ={AppRoute.Error}/>;
  }

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
              method="post"
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
                        required: ValidationEmail.Required,
                        pattern: {
                          value: ValidationEmail.Pattern.value,
                          message: ValidationEmail.Pattern.message,
                        },
                      })}
                      aria-invalid={errors.email ? 'true' : 'false'}
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
                        required: ValidationPassword.Required,
                        pattern: {
                          value: ValidationPassword.Pattern.value,
                          message: ValidationPassword.Pattern.message,
                        },
                      })}
                      aria-invalid={errors.password ? 'true' : 'false'}
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
                  {...register('userAgreement', { required: VALIDATION_AGREEMENT})}
                />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">
                  Я согласен с
                  <a className="link link--active-silver link--underlined" href="#">
                    правилами обработки персональных данных
                  </a>
                  и пользовательским соглашением
                </span>
              </label>
              {errors.userAgreement && (
                <span className="error">{errors.userAgreement.message}</span>
              )}
            </form>
          </div>
        </div>
      </main>
      <FooterComponent/>
    </div>
  );
}

export {LoginPages};
