import { createSelector } from "@ngxs/store";
import { Film, FilmStateModel } from "./films.models";
import {  filmState } from "./films.reducer";

export const selectFilms = (state: FilmStateModel) => state.films;
export const filmSelector = createSelector(filmState.films, filmState => filmState.films?.films);

