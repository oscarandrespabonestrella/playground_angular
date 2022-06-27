import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateManagementRoutingModule } from './date-management-routing.module';
import { FormatDateComponent } from './pages/format-date/format-date.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    FormatDateComponent
  ],
  imports: [
    CommonModule,
    DateManagementRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class DateManagementModule { }
