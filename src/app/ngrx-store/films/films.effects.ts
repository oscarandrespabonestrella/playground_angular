import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { WebServerService } from '../../core/services/web-services/web-server.service';
import { SetFilms } from './films.actions';

 
@Injectable()
export class FilmEffects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Ghibli Films] Request film list'),
    mergeMap(() => this.filmService.getGhibliFilms()
      .pipe(        
        map(movies => (SetFilms({films: movies}))),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private filmService: WebServerService
  ) {}
}