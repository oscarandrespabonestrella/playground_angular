import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subscription, startWith, distinctUntilChanged, debounceTime, switchMap } from 'rxjs';
import { DeleteFilm, EditFilm } from '../../../../ngrx-store/films/films.actions';
import { Film, FilmStateModel } from '../../../../store/films/films.models';
import { decrement, increment, reset } from '../../../../ngrx-store/counter.actions';
import { filmSelector } from '../../../../ngrx-store/films/films.selectors';
import { EditModalComponent } from '../../components/edit-modal/edit-modal.component';
import { ImagePreviewComponent } from '../../components/image-preview/image-preview.component';

@Component({
  selector: 'app-ngrx-example',
  templateUrl: './ngrx-example.component.html',
  styleUrls: ['./ngrx-example.component.scss']
})
export class NgrxExampleComponent implements OnInit {

  suscription: Subscription = new Subscription();

 
  films$: Observable<Film[]>;

  
  allColumns: string[] = [
    "title",
    "original_title",
    "original_title_romanised",
    "description",
    "director",
    "producer",
    "release_date",
    "running_time",
    "rt_score",
    "url",
    "movie_banner",
    "image",
    "action"
  ];

  columns: FormControl = new FormControl([
    "title",
    "original_title",
    "description",
    "image"
  ]);

  searchInput: FormControl =  new FormControl("");

  displayedColumns$: Observable<string[]> = this.columns.valueChanges.pipe(
    startWith([
      "title",
      "original_title",
      "description",
      "image",
      "action"
    ]),
    map(columns =>  columns.filter((value: string) => this.allColumns.indexOf(value) !== -1))
  );

  getGhibliFilms$: Observable<any> = this.searchInput.valueChanges
    .pipe(startWith(""),debounceTime(400), distinctUntilChanged(),
      switchMap(val =>
        this.films$
        .pipe(
          map(films => films
            .filter((film: Film) => film.title.toLowerCase().includes(val.toLowerCase()))
          )
        )
      )
  );




  deleteFilm(id: string){
    this.store.dispatch(DeleteFilm({data: id}));
  }

  editFilm(film: Film): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = film;
    dialogConfig.minWidth = "50%";
    const dialogRef = this.dialog.open(EditModalComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(result => {      
      this.store.dispatch(EditFilm({...result, filmId: result.id}));
    });
  }


  
  previewImage(image: string): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = image;
    dialogConfig.hasBackdrop= true;
    dialogConfig.panelClass = "image-preview";

    const dialogRef = this.dialog.open(ImagePreviewComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {

    });
  }

 
  constructor(private store: Store<{count: number, films: FilmStateModel}>, private dialog: MatDialog){ 
    this.films$ = store.pipe(select(filmSelector));
  }

  ngOnInit(): void {
    this.store.dispatch({type: '[Ghibli Films] Request film list'});
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

}
