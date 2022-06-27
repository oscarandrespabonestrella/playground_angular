import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleDateHelperComponent } from './pages/example-date-helper/example-date-helper.component';
import { FormatDateComponent } from './pages/format-date/format-date.component';

const routes: Routes = [
  {
    path: '',
    component: FormatDateComponent
  },
  {
    path: 'date-helper',
    component: ExampleDateHelperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateManagementRoutingModule { }
