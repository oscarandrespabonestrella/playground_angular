import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomfilterPipe } from './pipes/custom-filter/customfilter.pipe';



@NgModule({
  declarations: [CustomfilterPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CustomfilterPipe
  ]
})
export class SharedModule { }
