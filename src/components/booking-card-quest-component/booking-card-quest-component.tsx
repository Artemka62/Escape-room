import {Link} from 'react-router-dom';
import {ResponseDataBooking} from '../../services/type-service';
import {setLevel} from '../../utils';
import {AppRoute} from '../../const';
import {useAppDispatch} from '../../hooks/use-store';
import {deleteReservation} from '../../services/thunk/delete-reservation';
import {getMyReservation} from '../../services/thunk/get-my-reservation';

type BookingCardProps = {
  quest: ResponseDataBooking;
}

function BookingCardQuestComponent ({quest}: BookingCardProps) {
  const dispatch = useAppDispatch();


  function handleClickButton () {
    dispatch(deleteReservation(quest.id)).unwrap().then(() => {
      dispatch(getMyReservation());
    });
  }

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`${quest.quest.previewImgWebp}, ${quest.quest.previewImgWebp} 2x`}
          />
          <img
            src={quest.quest.previewImg}
            srcSet={`${quest.quest.previewImgWebp} 2x`}
            width={344}
            height={232}
            alt={quest.quest.title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link to={`${AppRoute.Quest}/${quest.quest.id}`} className="quest-card__link">
            {quest.quest.title}
          </Link>
          <span className="quest-card__info">
            {quest.location.address}
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {quest.peopleCount} чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {setLevel(quest.quest.level)}
          </li>
        </ul>
        <button onClick={handleClickButton}
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
        >
          Отменить
        </button>
      </div>
    </div>
  );
}

export {BookingCardQuestComponent};
