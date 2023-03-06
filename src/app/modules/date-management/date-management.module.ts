import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateManagementRoutingModule } from './date-management-routing.module';
import { FormatDateComponent } from './pages/format-date/format-date.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { ExampleDateHelperComponent } from './pages/example-date-helper/example-date-helper.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormatDateComponent,
    ExampleDateHelperComponent
  ],
  imports: [
    CommonModule,
    DateManagementRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSliderModule,
    MatListModule,
    MatCardModule,
    FormsModule
  ]
})
export class DateManagementModule { }
