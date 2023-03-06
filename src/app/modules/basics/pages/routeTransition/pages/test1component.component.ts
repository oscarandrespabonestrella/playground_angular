import { Component, OnInit } from '@angular/core';

@Component({  
  template: `
  <h1>test 1</h1>
  <ul>
  <li>test 1.1</li>
  <li>test 1.1</li>
  <li>test 1.1</li>
  <li>test 1.1</li>
  </ul>
  `,
})
export class Test1componentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
