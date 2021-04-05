import { Injectable } from '@angular/core';
import { FormControl, Validators, AbstractControl, ReactiveFormsModule, ValidatorFn, ControlContainer, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  
  validators = {
    login: new FormControl('', [Validators.required, this.loginValidator]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, this.passwordValidator]),
    confirmPassword: new FormControl('', [Validators.required, this.confirmPasswordValidator]),

  }

  constructor() { }

  loginValidator(control: AbstractControl): ValidationErrors | null {
    const login: string = control.value;
    const condLength = login.length >= 6;
    
    return condLength ? null : {forbiddenName : {value: login}};
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password: string = control.value;
    const condLength = password.length >= 6;
    
    return condLength ? null : {forbiddenName : {value: password}};
  }

  confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password: string = control.value;
    const condLength = password.length >= 6;
    
    return condLength ? null : {tooShortPassword : {value: password}};
  }

  
  createFormControl(validators: any[]): FormControl {
    return new FormControl('', validators);
  }
}
