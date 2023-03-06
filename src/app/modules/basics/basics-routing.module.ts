import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormManagementComponent } from './pages/form-management/form-management.component';
import { DetectionStrategyComponent } from './pages/detection-strategy/detection-strategy.component';
import { ComExampleComponent } from './pages/com-example/com-example.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { RouteTransitionComponent } from './pages/routeTransition/routeTransition.component';
import { Test1componentComponent } from './pages/routeTransition/pages/test1component.component';
import { Test2componentComponent } from './pages/routeTransition/pages/test2component.component';

const routes: Routes = [
  {
    path: "form-management",
    component: FormManagementComponent
  },
  {
    path: "detection-strategy",
    component: DetectionStrategyComponent
  },
  {
    path: "comm-example",
    component: ComExampleComponent
  },
  {
    path: "animation",
    component: AnimationComponent
  },
  {
    path: "route-animation",
    component: RouteTransitionComponent,
    children: [      
      {
        path: "test1",
        component: Test1componentComponent,
        data: { animation: 'test1Page' }
      },
      {
        path: "test2",
        component: Test2componentComponent,
        data: { animation: 'test2Page' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicsRoutingModule { }
