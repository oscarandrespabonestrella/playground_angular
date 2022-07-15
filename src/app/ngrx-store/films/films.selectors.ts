import { createSelector } from "@ngxs/store";
import { Film, FilmStateModel } from "./films.models";
import {  filmState } from "./films.reducer";

export const selectFilms = (state: FilmStateModel) => state.films;
const films = createSelector(filmState.films, filmState => filmState.films);

// export const getGhibliFilms = () =>
//     createSelector(selectFilms, (state: Film[]) => state);