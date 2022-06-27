import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormatDateComponent } from './pages/format-date/format-date.component';

const routes: Routes = [
  {
    path: '',
    component: FormatDateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateManagementRoutingModule { }
