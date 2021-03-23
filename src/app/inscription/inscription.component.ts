import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  login: string = '';
  email: string = '';
  password: string = '';
  emailValidator = this.validatorService.validators.email;
  testValidator = this.validatorService.validators.email;

  constructor(
    private auth: AuthService,
    public validatorService: ValidatorService) { }

  ngOnInit(): void {
  }

  handleSigningUp(email:string, password: string) {
    this.auth.signUpEmailPassword(email, password);
    console.log("inscription");
  }

  handleLogout(){
    this.auth.logout();
  }

  private checkPassword() {
    
  }

  // Validator pour la confirmation du mot de passe
  private confirmPasswordValidator(reg: RegExp) {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const match = reg.test(control.value);
      return match ? null : {badPassword: {value: control.value}};
    }
  }
}
