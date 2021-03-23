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

  loginControl = this.validatorService.validators.login;
  emailControl = this.validatorService.validators.email;
  passwordControl = this.validatorService.validators.password;
  confirmPasswordControl = this.validatorService.validators.confirmPassword;

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

  getEmailErrorMessage() {
    if(this.emailControl.hasError('required')){
      return 'Vous devez rentrer un email';
    }
    else if(this.emailControl.hasError('email')){
      return 'Votre email n\' est pas correct';
    }
    else{
      return 'Votre email est incorrect';
    }
  }

  getMdpErrorMessage() {
    if(this.passwordControl.hasError('required')){
      return 'Vous devez rentrer un email';
    }
    else if(this.passwordControl.hasError('email')){
      return 'Votre email n\' est pas correct';
    }
    else{
      return 'Votre email est incorrect';
    }
  }

  // Validator pour la confirmation du mot de passe
  private confirmPasswordValidator(reg: RegExp) {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const match = reg.test(control.value);
      return match ? null : {badPassword: {value: control.value}};
    }
  }
}
