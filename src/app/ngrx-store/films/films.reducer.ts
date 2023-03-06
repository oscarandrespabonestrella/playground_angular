import { createReducer, on } from '@ngrx/store';
import { SetFilms, DeleteFilm, EditFilm } from './films.actions';
import { FilmStateModel } from './films.models';


export const filmState: FilmStateModel = {
        films: []
};

export const FilmReducer = createReducer(
    filmState,
    on(
        SetFilms,
        (state, {films}) => ( films ? {...state, films: [...state.films, ...films]}: state),
    ),
    on(
        DeleteFilm,
        (state, { data }) => {          
            const films = state.films.filter(film => film.id !== data);
            return {...state, films};
        }
    ),
    on(
        EditFilm,
        (state, {filmId, title, description}) => {
            const films = state.films.map(film => {
                if (film.id === filmId) {
                    return {...film, title, description};
                }
                return film;
            });
            return {...state, films};
        }
    )
);

