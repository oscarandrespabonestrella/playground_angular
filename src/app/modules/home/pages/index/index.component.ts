import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime, distinctUntilChanged,
  map,
  Observable, startWith, switchMap, tap, scan, Subscription, Subject, takeUntil
} from 'rxjs';
import { Film, WebServerService } from '../../../../core/services/web-services/web-server.service';
import {MatSort, Sort} from '@angular/material/sort';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit, OnDestroy {

  @ViewChild('empTbSort', {static: false}) empTbSort = new MatSort();

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
    "image"
  ];

  columns: FormControl = new FormControl([
    "title",
    "original_title",
    "description",
    "image"
  ]);


  mainSuscription: Subject<any> = new Subject();

  searchInput: FormControl =  new FormControl("");

  displayedColumns$: Observable<string[]> = this.columns.valueChanges.pipe(
    startWith([
      "title",
      "original_title",
      "description",
      "image"
    ]),
    map(columns =>  columns.filter((value: string) => this.allColumns.indexOf(value) !== -1))
  );

    variable_x: any[] = [];

  getGhibliFilms$: Observable<any> = this.searchInput.valueChanges
    .pipe(startWith(""),debounceTime(400), distinctUntilChanged(),
      switchMap(val =>
        this.webServerService.getGhibliFilms()
        .pipe(
          map(films => films.filter(film => film.title.toLowerCase().includes(val.toLowerCase())))
        )
      )
  );




  sortData(data:any){
    data.sort = this.empTbSort;
    console.log(this.empTbSort);
  }





  constructor(private webServerService: WebServerService) { }

  ngOnInit(): void {    
  }

  ngOnDestroy(): void {
   
  }

}
