//import { useEffect } from 'react';
import { FilterLevel } from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import {filtersSlice} from '../../store/slices/filters-slice';

function FilterListLevelComponent () {
  const dispatch = useAppDispatch();
  const stateFilter = useAppSelector((state) => state.filter.filterLevel);
 // const states = useAppSelector((state) => state.filter.filterGenre);

  // useEffect(() => {
  //   dispatch(filtersSlice.actions.filterLevel(FilterLevel.Any));
  // }, [states ])

  function handleClickFilter(evt: React.MouseEvent<HTMLInputElement>) {
    const filter = evt.currentTarget.value;

    dispatch(filtersSlice.actions.filterLevel(filter));
  }

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        <li className="filter__item">
          <input onClick={handleClickFilter} type="radio" name="level" id="any" value={FilterLevel.Any} defaultChecked={stateFilter === FilterLevel.Any} />
          <label className="filter__label" htmlFor="any">
            <span className="filter__label-text">Любой</span>
          </label>
        </li>
        <li className="filter__item">
          <input onClick={handleClickFilter} type="radio" name="level" id="easy" value={FilterLevel.Easy} defaultChecked={stateFilter === FilterLevel.Easy}/>
          <label className="filter__label" htmlFor="easy">
            <span className="filter__label-text">Лёгкий</span>
          </label>
        </li>
        <li className="filter__item">
          <input onClick={handleClickFilter} type="radio" name="level" id="middle" value={FilterLevel.Medium} defaultChecked={stateFilter === FilterLevel.Medium}/>
          <label className="filter__label" htmlFor="middle">
            <span className="filter__label-text">Средний</span>
          </label>
        </li>
        <li className="filter__item">
          <input onClick={handleClickFilter} type="radio" name="level" id="hard" value={FilterLevel.Hard} defaultChecked={stateFilter === FilterLevel.Hard}/>
          <label className="filter__label" htmlFor="hard">
            <span className="filter__label-text">Сложный</span>
          </label>
        </li>
      </ul>
    </fieldset>
  );
}

export {FilterListLevelComponent};
