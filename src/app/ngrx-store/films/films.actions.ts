import { createAction, props } from '@ngrx/store';
import { Film } from './films.models';

export const RequestFilms = createAction(
    '[Ghibli Films] Request film list'
); 

export const SetFilms = createAction(
    '[Ghibli Films] Set film list',
    props<{ films: Film[]}>()
); 

export const DeleteFilm = createAction(
    '[Ghibli Films] Delete film',
    props<{ filmId: string}>()
);
    

export const EditFilm = createAction(
    '[Ghibli Films] Edit film',
    props<{ filmId: string, title: string, description: string}>()
);