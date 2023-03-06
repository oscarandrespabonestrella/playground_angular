import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
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
  
  searchCreature: string = "";

  testAnimals: any[]= [
    {
      name: 'shark',
      type: 'fish',
    },
    {
      name: 'dolphin',
      type: 'mammal',
    },
    {
      name: 'Bear',
      type: 'mammal',
    },
    {
      name: 'ant',
      type: 'insect',
    }
  ]

  observableNumbers: Observable<any> = of(1,2,3,4)


  formatDate(date: string){}

  constructor() { }

  ngOnInit(): void {
  }

}
