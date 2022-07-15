import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-component',
  templateUrl: './array-component.component.html',
  styleUrls: ['./array-component.component.scss']
})
export class ArrayComponentComponent implements OnInit {
@Input() arrayList: string[] = []

  trackByindex (index: number, item: string){
    return `${item}-list-${index}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
