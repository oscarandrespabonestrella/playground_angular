import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { DessignPatternsRoutingModule } from './dessign-patterns-routing.module';

import { StrategyWithCompression, StrategyWithoutCompression } from './services/strategy.service';
import { PastaService, PizzaService } from './services/abstract-factory.service';
import { AbstractFactoryComponent } from './pages/abstract-factory/abstract-factory.component';

import { StrategyComponent } from './pages/strategy/strategy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    StrategyComponent,
    AbstractFactoryComponent
  ],
  imports: [
    CommonModule,
    DessignPatternsRoutingModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    StrategyWithCompression,
    StrategyWithoutCompression,
    PastaService,
    PizzaService

  ]
})
export class DessignPatternsModule { }

