import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterByPipeComponent } from './pages/filter-by-pipe/filter-by-pipe.component';
import { IndexComponent } from './pages/index/index.component';
import { NgxsExampleComponent } from './pages/ngxs-example/ngxs-example.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'filter-by-pipe',
    component: FilterByPipeComponent
  },
  {
    path: 'ngxs-example',
    component: NgxsExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
