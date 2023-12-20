import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import {filtersSlice} from '../../store/slices/filters-slice';
import {FilterGenre} from '../../const';

function FilterListGenreComponent () {

  const dispatch = useAppDispatch();
  const stateFilter = useAppSelector((state) => state.filter.filterGenre);

  function handleClickFilter(evt: React.MouseEvent<HTMLInputElement>) {
    const filter = evt.currentTarget.value;

    dispatch(filtersSlice.actions.filterGenre(filter));
  }

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        <li className="filter__item">
          <input onClick={handleClickFilter} type="radio" name="type" id="all" value={FilterGenre.All} defaultChecked={stateFilter === FilterGenre.All}/>
          <label className="filter__label" htmlFor="all">
            <svg
              className="filter__icon"
              width={26}
              height={30}
              aria-hidden="true"
            >
              <use xlinkHref="#icon-all-quests" />
            </svg>
            <span className="filter__label-text">Все квесты</span>
          </label>
        </li>
        <li className="filter__item">
          <input onClick={handleClickFilter} type="radio" name="type" id="adventure" value={FilterGenre.Adventures} defaultChecked={stateFilter === FilterGenre.Adventures}/>
          <label className="filter__label" htmlFor="adventure">
            <svg
              className="filter__icon"
              width={36}
              height={30}
              aria-hidden="true"
            >
              <use xlinkHref="#icon-adventure" />
            </svg>
            <span className="filter__label-text">Приключения</span>
          </label>
        </li>
        <li className="filter__item">
          <input onClick={handleClickFilter} type="radio" name="type" id="horror" value={FilterGenre.Horror} defaultChecked={stateFilter === FilterGenre.Horror}/>
          <label className="filter__label" htmlFor="horror">
            <svg
              className="filter__icon"
              width={30}
              height={30}
              aria-hidden="true"
            >
              <use xlinkHref="#icon-horror" />
            </svg>
            <span className="filter__label-text">Ужасы</span>
          </label>
        </li>
        <li className="filter__item">
          <input onClick={handleClickFilter} type="radio" name="type" id="mystic" value={FilterGenre.Mystic} defaultChecked={stateFilter === FilterGenre.Mystic}/>
          <label className="filter__label" htmlFor="mystic">
            <svg
              className="filter__icon"
              width={30}
              height={30}
              aria-hidden="true"
            >
              <use xlinkHref="#icon-mystic" />
            </svg>
            <span className="filter__label-text">Мистика</span>
          </label>
        </li>
        <li className="filter__item">
          <input onClick={handleClickFilter} type="radio" name="type" id="detective" value={FilterGenre.Detective} defaultChecked={stateFilter === FilterGenre.Detective}/>
          <label className="filter__label" htmlFor="detective">
            <svg
              className="filter__icon"
              width={40}
              height={30}
              aria-hidden="true"
            >
              <use xlinkHref="#icon-detective" />
            </svg>
            <span className="filter__label-text">Детектив</span>
          </label>
        </li>
        <li className="filter__item">
          <input onClick={handleClickFilter} type="radio" name="type" id="sciFi" value={FilterGenre.SciFi} defaultChecked={stateFilter === FilterGenre.SciFi}/>
          <label className="filter__label" htmlFor="sciFi">
            <svg
              className="filter__icon"
              width={28}
              height={30}
              aria-hidden="true"
            >
              <use xlinkHref="#icon-sci-fi" />
            </svg>
            <span className="filter__label-text">Sci-fi</span>
          </label>
        </li>
      </ul>
    </fieldset>
  );
}

export {FilterListGenreComponent};
