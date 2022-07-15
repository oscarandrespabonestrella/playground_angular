import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detection-onpush',
  template: `
    <h1>{{test | json}}</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class DetectionOnpushComponent implements OnInit {


  @Input() test: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
