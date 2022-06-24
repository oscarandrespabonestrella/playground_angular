import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { WebServerService } from '../../../../core/services/web-services/web-server.service';

@Component({
  selector: 'app-filter-by-pipe',
  templateUrl: './filter-by-pipe.component.html',
  styleUrls: ['./filter-by-pipe.component.scss']
})
export class FilterByPipeComponent implements OnInit {

  displayedColumns: string[] = [    
    "name",
    "classification",
    "eye_colors",
    "hair_colors",
    "url",    
  ];

  searchInput: FormControl =  new FormControl("");
  
  getGhibliSpecies$: Observable<any> = this.webServerService.getGhibliSpecies();

  constructor( private webServerService: WebServerService) { }

  ngOnInit(): void {
  }

}
