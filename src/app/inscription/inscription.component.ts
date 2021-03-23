import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  email: string = '';
  password: string ='';
  
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  handleSigningUp(email:string, password: string) {
    this.auth.signUpEmailPassword(email, password);
    console.log("inscription");
  }

  handleLogout(){
    this.auth.logout();
  }
}
