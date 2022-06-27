import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractFactoryComponent } from './pages/abstract-factory/abstract-factory.component';
import { StrategyComponent } from './pages/strategy/strategy.component';


const routes: Routes = [
  {
    path: 'strategy',
    component: StrategyComponent
  },
  {
    path: 'abstract-factory',
    component: AbstractFactoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DessignPatternsRoutingModule { }
