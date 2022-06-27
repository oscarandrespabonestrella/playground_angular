import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({  
  templateUrl: './image-preview.component.html'  
})
export class ImagePreviewComponent implements OnInit {

  image = "";

  constructor(private dialogRef: MatDialogRef<ImagePreviewComponent>, @Inject(MAT_DIALOG_DATA) data: string)  {
    this.image = data;  
  }

  ngOnInit(): void {

  }

}
