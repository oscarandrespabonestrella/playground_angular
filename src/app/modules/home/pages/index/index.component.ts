import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime, distinctUntilChanged,
  map,
  Observable, startWith, switchMap
} from 'rxjs';
import { Film, WebServerService } from '../../../../core/services/web-services/web-server.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

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
  
  getGhibliFilms$: Observable<any> = this.searchInput.valueChanges
    .pipe(startWith(""),debounceTime(400), distinctUntilChanged(), 
      switchMap(val => 
        this.webServerService.getGhibliFilms$()
        .pipe(map(films => films.filter((film: Film) => film.title.toLowerCase().includes(val.toLowerCase()))))
    )
  );

  



  constructor(private webServerService: WebServerService) { }

  ngOnInit(): void {
  }

}
