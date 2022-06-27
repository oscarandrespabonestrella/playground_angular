import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateManagementRoutingModule } from './date-management-routing.module';
import { FormatDateComponent } from './pages/format-date/format-date.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ExampleDateHelperComponent } from './pages/example-date-helper/example-date-helper.component';


@NgModule({
  declarations: [
    FormatDateComponent,
    ExampleDateHelperComponent
  ],
  imports: [
    CommonModule,
    DateManagementRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class DateManagementModule { }
