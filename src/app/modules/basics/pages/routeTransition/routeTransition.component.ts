import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  templateUrl: './routeTransition.component.html',
  animations: [
    slideInAnimation
  ]
})
export class RouteTransitionComponent implements OnInit {

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  ngOnInit() {
  }

}
