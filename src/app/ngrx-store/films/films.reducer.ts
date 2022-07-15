import { createReducer, on } from '@ngrx/store';
import {DeleteFilm, EditFilm, RequestFilms, SetFilms} from './films.actions';
import { FilmStateModel } from './films.models';


export const filmState: FilmStateModel = {
        films: []
};

export const filmReducer = createReducer(
    filmState,
    on(
        SetFilms,
        (state, {films}) => ({...state, films: [...state.films, ...films]}),
    ),
);