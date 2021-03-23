import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  handleLogin(email:string, password: string){
    this.auth.loginEmailPassword(email, password);
    console.log("loging");
  }

  // handleLogout(){
  //   this.auth.logout();
  // }
}
