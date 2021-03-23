import { Injectable } from '@angular/core';
import { FormControl, Validators, AbstractControl, ReactiveFormsModule, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  
  validators = {
    login: new FormControl('', []),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', []),
    confirmPassword: new FormControl('', []),

  }

  passwordValidator(): ValidatorFn {

  }
  constructor() { }
}
