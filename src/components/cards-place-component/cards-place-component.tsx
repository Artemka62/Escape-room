import {useAppSelector} from '../../hooks/use-store';
import {CardQuestComponent} from '../card-quest-component/card-quest-component';

function CardsPlaceComponent () {

  const stateQuestions = useAppSelector((state) => state.questions.questions);

  return (
    <div className="cards-grid">

      {stateQuestions?.map((quest) => <CardQuestComponent key={quest.id} quest={quest}/>) }

    </div>
  );
}

export {CardsPlaceComponent};
