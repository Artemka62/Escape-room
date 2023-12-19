import {FiltersGenre} from '../../const';
import {useAppSelector} from '../../hooks/use-store';
import {CardQuestComponent} from '../card-quest-component/card-quest-component';

function CardsPlaceComponent () {
  const stateQuestions = useAppSelector((state) => state.questions.questions);
  const stateFilter = useAppSelector((state) => state.filterGenre.filterGenre);
  const getQuestionsGenre = stateQuestions?.filter((question) => question.type === stateFilter);
  const questions = stateFilter === FiltersGenre.all ? stateQuestions : getQuestionsGenre;


  return (
    <div className="cards-grid">

      {questions?.map((quest) => <CardQuestComponent key={quest.id} quest={quest}/>) }

    </div>
  );
}

export {CardsPlaceComponent};
