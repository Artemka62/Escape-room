import { FilterGenre, LevelQuestRu, GenreQuestRu, FilterLevel } from './const';

function setLevel (level: string) {
  switch (level) {
    case FilterLevel.Easy:
      return LevelQuestRu.Easy;
    case FilterLevel.Medium:
      return LevelQuestRu.Medium;
    case FilterLevel.Hard:
      return LevelQuestRu.Hard;
    default:
      return '';
  }
}

function setGenre (genre: string) {
  switch (genre) {
    case FilterGenre.Detective:
      return GenreQuestRu.Detective;
    case FilterGenre.Horror:
      return GenreQuestRu.Horror;
    case FilterGenre.Mystic:
      return GenreQuestRu.Mystic;
    case FilterGenre.Adventures:
      return GenreQuestRu.Adventures;
    case FilterGenre.SciFi:
      return GenreQuestRu.SciFi;
    default:
      return '';
  }
}

function formatTime (timeString: string): string {
  const [hours, minutes] = timeString.split(':').map(Number);
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}h${formattedMinutes}m`;
}


export {setLevel, setGenre, formatTime};
