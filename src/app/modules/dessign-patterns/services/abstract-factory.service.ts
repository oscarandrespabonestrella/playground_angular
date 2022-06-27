import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// AbstractFactoryInterface


@Injectable()
export class PastaService implements Food {
  constructor() {}
  public get(): Observable<any> {
    return of([
      {
        name: 'Carbonara'
      },
      {
        name: 'Pesto'
      }
    ])
  }
}


@Injectable()
export class PizzaService implements Food {
  constructor() {}
  public get(): Observable<any> {
    return of([
      {
        name: 'Margerita'
      },
      {
        name: 'Napolitan'
      }
    ])
  }
}

export interface Food {
  get(): Observable<any>;
}
// AbstractFactoryProvider as a HashMap
export const foodMap = new Map([
  ['PASTA', PastaService],
  ['PIZZA', PizzaService]
]);