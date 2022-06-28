import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './form-management.component.html',
  styleUrls: ['./form-management.component.scss']
})
export class FormManagementComponent implements OnInit {

  singleField: FormControl = new FormControl('');

  

  multipleFields: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

  multipleFieldsFB: FormGroup;


singleFieldTemplateDriven = "";

  multipleFieldsTemplateDriven = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor(private fb: FormBuilder) {
    this.multipleFieldsFB = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

   }

  ngOnInit(): void {
  }

}
