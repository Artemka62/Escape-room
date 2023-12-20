import {useState} from 'react';
import {QuestCard} from '../../store/type-store';
import {Link} from 'react-router-dom';
import {AppRoute, LevelQuest, LevelQuestRu, Person} from '../../const';
import {fetchQuestAction} from '../../services/thunk/fetch-quest';
import {useAppDispatch} from '../../hooks/use-store';


type QuestProps = {
  quest: QuestCard;
}

function CardQuestComponent ({quest}: QuestProps) {

  const dispatch = useAppDispatch();

  const [cardState, setCardState] = useState({
    offerId: quest.id
  });


  function handelPointOffer () {
    //dispatch(offerSlice.actions.addLoadOfferCard(offer));

  }

  function handelLeavePointOffer () {
    //dispatch(offerSlice.actions.addLoadOfferCard(null));
  }

  function handelClickCard () {
    setCardState({
      ...cardState,
      offerId: quest.id,
    });

    dispatch(fetchQuestAction(cardState.offerId));
  }

  function setLevel (level: string) {
    switch (level) {
      case LevelQuest.Easy:
        return LevelQuestRu.Easy;
      case LevelQuest.Medium:
        return LevelQuestRu.Medium;
      case LevelQuest.Hard:
        return LevelQuestRu.Hard;
    }
  }

  return (
    <div
      className="quest-card"
      onClick = {handelClickCard}
      onMouseEnter={handelPointOffer}
      onMouseLeave={handelLeavePointOffer}
    >
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet= {`${quest.previewImgWebp}, ${quest.previewImgWebp} 2x`}
          />
          <img
            src={quest.previewImg}
            srcSet={quest.previewImgWebp}
            width={344}
            height={232}
            alt={quest.title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link to={`${AppRoute.Quest}/${quest.id}`} className="quest-card__link">
            {quest.title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {`${quest.peopleMinMax[Person.Min]}–${quest.peopleMinMax[Person.Max]}`}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {setLevel(quest.level)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export {CardQuestComponent};

