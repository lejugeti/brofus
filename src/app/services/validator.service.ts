import { Injectable } from '@angular/core';
import { FormControl, Validators, AbstractControl, ReactiveFormsModule, ValidatorFn, ControlContainer, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  
  validators = {
    login: new FormControl('', []),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, this.passwordValidator]),
    confirmPassword: new FormControl('', []),

  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password: string = control.value;
    const condLength = password.length >= 6;
    
    return condLength ? null : {forbiddenName : {value: password}};
  }

  // Validator pour la confirmation du mot de passe
  private confirmPasswordValidator(reg: RegExp) {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const match = reg.test(control.value);
      return match ? null : {badPassword: {value: control.value}};
    }
  }

  constructor() { }
}
