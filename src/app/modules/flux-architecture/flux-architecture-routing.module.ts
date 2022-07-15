import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxExampleComponent } from './pages/ngrx-example/ngrx-example.component';
import { NgxsExampleComponent } from './pages/ngxs-example/ngxs-example.component';

const routes: Routes = [
  {
    path: '',
    component: NgxsExampleComponent
  },
  {
    path: 'ngrx',
    component: NgrxExampleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FluxArchitectureRoutingModule { }
