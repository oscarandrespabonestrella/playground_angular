import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { WebServerService } from 'src/app/core/services/web-services/web-server.service';
import { Film } from 'src/app/store/films/films.models';
import { decrement, increment, reset } from '../../../../ngrx-store/counter.actions';
import { RequestFilms, SetFilms } from '../../../../ngrx-store/films/films.actions';

@Component({
  selector: 'app-ngrx-example',
  templateUrl: './ngrx-example.component.html',
  styleUrls: ['./ngrx-example.component.scss']
})
export class NgrxExampleComponent implements OnInit {

  suscription: Subscription = new Subscription();

  count$: Observable<number>;
  films$: Observable<Film[]>;

  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  constructor(private store: Store<{count: number, films: Film[]}>, private webServerService: WebServerService){
    this.count$ = store.select('count');
    this.films$ = store.select('films');
  }

  ngOnInit(): void {
    this.suscription = this.webServerService.getGhibliFilms().subscribe(films => {
      this.store.dispatch(SetFilms({films}));
    });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

}
