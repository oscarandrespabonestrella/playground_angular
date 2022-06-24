import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime, distinctUntilChanged,
  map,
  Observable, startWith, switchMap, tap, scan
} from 'rxjs';
import { Film, WebServerService } from '../../../../core/services/web-services/web-server.service';
import {MatSort, Sort} from '@angular/material/sort';
import { Select, Store } from '@ngxs/store';
import { FilmsState } from '../../../../store/films/films.state';
import { DeleteFilm, EditFilm, RequestFilms } from '../../../../store/films/films.actions';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditModalComponent } from '../../components/edit-modal/edit-modal.component';



@Component({
  templateUrl: './ngxs-example.component.html'
})
export class NgxsExampleComponent implements OnInit {

  @ViewChild('empTbSort', {static: false}) empTbSort = new MatSort();

  @Select(FilmsState.getFilms) films$!: Observable<Film[]>;

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

  sortData(data:any){    
    data.sort = this.empTbSort;
    console.log(this.empTbSort);
  }

  deleteFilm(id: string){
    this.store.dispatch(new DeleteFilm(id));
  }

  editFilm(film: Film): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = film;
    dialogConfig.minWidth = "50%";
    const dialogRef = this.dialog.open(EditModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {      
      this.store.dispatch(new EditFilm(result.id, result.title, result.description));
    });
  }



  constructor(private store: Store, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(new RequestFilms());
  }

}
