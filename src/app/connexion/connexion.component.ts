import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  emailControl: FormControl = this.validatorService.validators.email;
  passwordControl: FormControl = this.validatorService.validators.password;

  constructor(
    private auth: AuthService,
    private validatorService: ValidatorService) { }

  ngOnInit(): void {
  }

  handleLogin(email:string, password: string){
    this.auth.loginEmailPassword(email, password);
    console.log("loging");
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
  
  handleLogout(){
    this.auth.logout();
  }
}
