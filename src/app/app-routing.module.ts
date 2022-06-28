import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) =>m.HomeModule)
  },
  {
    path: 'ngxs-example',
    loadChildren: () => import('./modules/flux-architecture/flux-architecture.module').then((m) =>m.FluxArchitectureModule)
  },
  {
    path: 'design-patterns',
    loadChildren: () => import('./modules/dessign-patterns/dessign-patterns.module').then((m) =>m.DessignPatternsModule)
  },
  {
    path: 'date-management',
    loadChildren: () => import('./modules/date-management/date-management.module').then((m) =>m.DateManagementModule)
  },
  {
    path: 'basics',
    loadChildren: () => import('./modules/basics/basics.module').then((m) =>m.BasicsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
