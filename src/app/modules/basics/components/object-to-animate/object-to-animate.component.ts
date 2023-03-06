import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-to-animate',
  templateUrl: './object-to-animate.component.html',
  styleUrls: ['./object-to-animate.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('fadeImage', [
      // ...
      state('hidden', style({        
        opacity: 0.1,
        transform: "rotate(0deg)"
      })),
      state('visible', style({
        opacity: 1,
        transform: "rotate(-180deg)"
      })),
      transition('hidden => visible', [
        animate('1s')
      ]),
      transition('visible => hidden', [
        animate('0.5s')
      ]),
    ]),

  ]
})
export class ObjectToAnimateComponent implements OnInit {

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
