import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsRoutingModule } from './basics-routing.module';
import { FormManagementComponent } from './pages/form-management/form-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { DetectionStrategyComponent } from './pages/detection-strategy/detection-strategy.component';
import { DetectionOnpushComponent } from './components/detection-onpush/detection-onpush.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MarkForChangeExampleComponent } from './components/mark-for-change-example/mark-for-change-example.component';
import { ArrayComponentComponent } from './components/array-component/array-component.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ComExampleComponent } from './pages/com-example/com-example.component';
import { ChildComponent } from './components/child/child.component';
import { CommService } from './services/comm-service.service';
import { AnimationComponent } from './pages/animation/animation.component';
import { ObjectToAnimateComponent } from './components/object-to-animate/object-to-animate.component';
import { Test1componentComponent } from './pages/routeTransition/pages/test1component.component';
import { RouterModule } from '@angular/router';
import { RouteTransitionComponent } from './pages/routeTransition/routeTransition.component';
import { CustomFilterPipe } from './pipes/customFilter.pipe';
import { ScanPipePipe } from './pipes/scanPipe.pipe';


@NgModule({
  declarations: [
    FormManagementComponent,
    DetectionStrategyComponent,
    DetectionOnpushComponent,
    MarkForChangeExampleComponent,
    ArrayComponentComponent,
    ComExampleComponent,
    ChildComponent,
    AnimationComponent,
    ObjectToAnimateComponent,
    Test1componentComponent,
    RouteTransitionComponent,
    CustomFilterPipe,
    ScanPipePipe
  ],
  imports: [
    CommonModule,
    BasicsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BasicsModule { }
