import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormManagementComponent } from './pages/form-management/form-management.component';

const routes: Routes = [
  {
    path: "form-management",
    component: FormManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicsRoutingModule { }
