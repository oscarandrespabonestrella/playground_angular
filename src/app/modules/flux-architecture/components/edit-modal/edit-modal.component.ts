import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Film } from 'src/app/core/services/web-services/web-server.service';


@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  film: Film = {} as Film;
  filmForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<EditModalComponent>, @Inject(MAT_DIALOG_DATA) data: Film, private fb: FormBuilder) {     
    this.film = {...data};
    this.filmForm = this.fb.group({
      title: [this.film.title],
      description: [this.film.description]
    })
  }

  save() {    
    this.dialogRef.close({...this.filmForm.value, id: this.film.id});
  }
  ngOnInit(): void {
    
  }

}
