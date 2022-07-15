import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormManagementComponent } from './pages/form-management/form-management.component';
import { DetectionStrategyComponent } from './pages/detection-strategy/detection-strategy.component';

const routes: Routes = [
  {
    path: "form-management",
    component: FormManagementComponent
  },
  {
    path: "detection-strategy",
    component: DetectionStrategyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicsRoutingModule { }
