import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { Film } from 'src/app/store/films/films.models';
import { FilmsState } from 'src/app/store/films/films.state';

@Component({  
  templateUrl: './detection-strategy.component.html',  
})
export class DetectionStrategyComponent implements OnInit {

  @Select(FilmsState.getFilms)  films$!: Observable<Film[]>
  
  variableTest: string[] = ["Testing change detection strategy", "Testing change detection strategy 2"];

  pushInfo() {
    this.variableTest.push("Testing change detection strategy 3");
  }

  changeReferal() {
    this.variableTest = [ ...this.variableTest, "Testing change detection strategy 3"];
  }



  
  aquaticCreatures = new BehaviorSubject(['shark', 'dolphin', 'octopus']);

  addAcquaticCreature(newAquaticCreature: any ): void {
    this.aquaticCreatures.next([newAquaticCreature, ...this.aquaticCreatures.value]);
  }
  



  constructor() { }

  ngOnInit(): void {
  }

}
