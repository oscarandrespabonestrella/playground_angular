import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluxArchitectureRoutingModule } from './flux-architecture-routing.module';
import { NgxsExampleComponent } from './pages/ngxs-example/ngxs-example.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { NgrxExampleComponent } from './pages/ngrx-example/ngrx-example.component';



@NgModule({
  declarations: [
    EditModalComponent,
    ImagePreviewComponent,
    NgxsExampleComponent,
    NgrxExampleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FluxArchitectureRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule

  ]
})
export class FluxArchitectureModule { }
