import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { foodMap } from '../../services/abstract-factory.service';

@Component({
  templateUrl: './abstract-factory.component.html',  
})
export class AbstractFactoryComponent implements OnInit, OnDestroy {

  susbcriptions: Subject<any> = new Subject();

  type: FormControl = new FormControl('PIZZA');
  
  public foods: Array<any> = [];
  public service: any;

  getFood(){
    const injectable = foodMap.get(this.type.value);
    // Inject service
    this.service = this.injector.get(injectable);
  }


  constructor(private injector: Injector) {}

  ngOnInit(): void {
     // Resolve AbstractFactory     
     this.getFood()
     // Calling method implemented by Food interface
     this.service.get().subscribe((foods: any[]) => {
       this.foods = foods;
     })

     this.type.valueChanges.pipe(takeUntil(this.susbcriptions)).subscribe(
      val => this.getFood()
     )
  }

  ngOnDestroy(): void {
    this.susbcriptions.next(true);
    this.susbcriptions.complete();
  }

  
}
