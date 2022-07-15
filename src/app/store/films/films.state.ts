import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { WebServerService } from 'src/app/core/services/web-services/web-server.service';
import { DeleteFilm, EditFilm, RequestFilms } from './films.actions';
import { Film, FilmStateModel } from './films.models';
import produce from 'immer';

@State<FilmStateModel>({
  name: 'Ghibli_films',
  defaults: {
    films: [],
    people: []
  }
})
@Injectable()
export class FilmsState {
    @Selector()
    static getFilms(state: FilmStateModel) {
        return state.films
    }



    @Action(RequestFilms)
    RequestFilms(ctx: StateContext<FilmStateModel>) {
        return this.webserverService.getGhibliFilms().pipe(tap((films: Film[]) => {                      
            ctx.patchState({
              films: films
            })
        }))
    }

    @Action(DeleteFilm)
    DeleteFilm(ctx: StateContext<FilmStateModel>, action: DeleteFilm) {
        ctx.patchState({
            films : ctx.getState()?.films.filter((film: Film) => film.id !== action.filmId)
        })
    }

    @Action(EditFilm)
    EditFilm(ctx: StateContext<FilmStateModel>, action: EditFilm) {      
      const state = ctx.getState();
      const index: number = state.films.findIndex(val => val.id === action.filmId);    
      if(index !== -1){
        ctx.setState(produce(state, (draft: FilmStateModel) => {
          draft.films[index] = {...draft.films[index] , title: action.title, description: action.description};
        }))        
      }
    }    

    constructor(private webserverService: WebServerService){}
}

