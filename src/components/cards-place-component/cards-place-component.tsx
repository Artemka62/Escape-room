import {FilterGenre, FilterLevel} from '../../const';
import {useAppSelector} from '../../hooks/use-store';
import {CardQuestComponent} from '../card-quest-component/card-quest-component';

function CardsPlaceComponent() {
  const stateQuestions = useAppSelector((state) => state.quests.quests);
  const stateFilterGenre = useAppSelector((state) => state.filter.filterGenre);
  const stateFilterLevel = useAppSelector((state) => state.filter.filterLevel);

  const filteredQuestions = Array.isArray(stateQuestions) ? stateQuestions
    .filter((question) => stateFilterGenre === FilterGenre.All || question.type === stateFilterGenre)
    .filter((question) => stateFilterLevel === FilterLevel.Any || question.level === stateFilterLevel)
    : [];

  return (
    <div className="cards-grid">
      {filteredQuestions?.map((quest) => (
        <CardQuestComponent key={quest.id} quest={quest} />
      ))}
    </div>
  );
}

export { CardsPlaceComponent };
