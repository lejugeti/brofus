import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
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

  confirmPasswordError: any = null;

  constructor(
    private auth: AuthService,
    public validatorService: ValidatorService) { }

  ngOnInit(): void {
  }

  handleSigningUp(email:string, password: string) {
    this.auth.signUpEmailPassword(this.emailControl.value, this.passwordControl.value);
    console.log("inscription");
  }

  handleLogout(){
    this.auth.logout();
  }

  checkPassword() {
    
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
      return 'Vous devez rentrer un mot de passe';
    }
    else if(this.passwordControl.hasError('badName')){
      return 'Votre mot de passe n\' est pas correct';
    }
    else{
      return 'Votre mot de passe est incorrect';
    }
  }

  getConfirmMdpErrorMessage() {
    if(this.passwordControl.hasError('required')){
      return 'Vous devez confirmez votre mot de passe';
    }
    else if(this.passwordControl.hasError('tooShortPassword')){
      return 'Votre 2e mot de passe est incorrect';
    }
    else{
      return 'Votre deuxième mot de passe est incorrect';
    }
  }

}
