import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { WebServerService } from 'src/app/core/services/web-services/web-server.service';
import { DeleteFilm, RequestFilms } from './films.actions';
import { Film, FilmStateModel } from './films.models';

@State<FilmStateModel>({
  name: 'animals',
  defaults: {
    films: []
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
            films : ctx.getState()?.films.filter(film => film.id !== action.filmId)
        })
    }

    constructor(private webserverService: WebServerService){}
}