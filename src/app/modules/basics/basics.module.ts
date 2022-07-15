import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsRoutingModule } from './basics-routing.module';
import { FormManagementComponent } from './pages/form-management/form-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { DetectionStrategyComponent } from './pages/detection-strategy/detection-strategy.component';
import { DetectionOnpushComponent } from './components/detection-onpush/detection-onpush.component';
import { MatButtonModule } from '@angular/material/button';
import { MarkForChangeExampleComponent } from './components/mark-for-change-example/mark-for-change-example.component';
import { ArrayComponentComponent } from './components/array-component/array-component.component';


@NgModule({
  declarations: [
    FormManagementComponent,
    DetectionStrategyComponent,
    DetectionOnpushComponent,
    MarkForChangeExampleComponent,
    ArrayComponentComponent
  ],
  imports: [
    CommonModule,
    BasicsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class BasicsModule { }
