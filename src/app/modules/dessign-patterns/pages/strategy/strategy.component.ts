import { Component, Injector, OnInit } from '@angular/core';
import { Strategy, StrategyMap } from '../../services/strategy.service';

@Component({
  template: `
  <h1>Strategy design Pattern</h1> 
  <mat-slide-toggle  color="primary" [checked]="true" (change)="toggleHandler($event.checked)">
   Compress Images
  </mat-slide-toggle> <br><br><br>
  <input type="file" accept="image/*" multiple="" id="file" (change)="uploadFile($event)" />
  `,
})
export class StrategyComponent implements OnInit {
  strategy!: Strategy;
  constructor(private injector: Injector) {}
  fileProcessingMode = 'Compressed';
  ngOnInit() {
    this.strategy = this.injector.get<Strategy>(StrategyMap.get(true));
  }
  uploadFile(event: any) {
    const filesArray = Array.from((event.target).files);
    this.strategy.processFiles(filesArray);
  }
  toggleHandler(isChecked: boolean) {
    this.strategy = this.injector.get<Strategy>(StrategyMap.get(isChecked));
  }

}
