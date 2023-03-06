import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { WebServerService } from 'src/app/core/services/web-services/web-server.service';
import { CustomDateValidator } from './date-async.validator';

@Component({
  templateUrl: './form-management.component.html',
  styleUrls: ['./form-management.component.scss']
})
export class FormManagementComponent implements OnInit, OnDestroy {

  suscription: Subscription = new Subscription();

  formValue: Observable<any> = new Observable();

  singleField: FormControl = new FormControl('');

  changeRegister: any;

  multipleFields: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    birthday: new FormControl('', {
      validators: [Validators.required], 
      asyncValidators: [
        CustomDateValidator.createValidator(this.webServerService)
      ]}),
  });

  multipleFieldsFB: FormGroup;


singleFieldTemplateDriven = "";

  multipleFieldsTemplateDriven = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor(
    private fb: FormBuilder,    
    private webServerService: WebServerService) {

    this.multipleFieldsFB = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

   }

   changeName(name:string){
    this.multipleFields.patchValue({
      firstName: name
    })

   }

  ngOnInit(): void {

    this.formValue = this.multipleFieldsFB.valueChanges.pipe()
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

}
