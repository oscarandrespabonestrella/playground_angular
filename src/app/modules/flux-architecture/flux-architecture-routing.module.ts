import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxsExampleComponent } from './pages/ngxs-example/ngxs-example.component';

const routes: Routes = [
  {
    path: '',
    component: NgxsExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FluxArchitectureRoutingModule { }
