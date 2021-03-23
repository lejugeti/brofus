import { Injectable } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  
  validators = {
    email: new FormControl('', [Validators.required, Validators.email]),
    
  }
  constructor() { }
}
