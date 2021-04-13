import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any; 

  constructor(
    private authService: AuthService) { }

  ngOnInit(): void {
    // this.user = localStorage.getItem('user');
    this.getUser();
    // console.log(localStorage);
  }

  checkIfUserIsConnected() {
    // on essaye de récupérer un user s'il est connecté
    if(this.user === ''){
      this.getUser();
    }
    return this.user !== '';
  }


  logout() {
    this.authService.logout()
    .then(success => {
      if(success){
        this.ngOnInit();
      }
    })
    .catch(err => alert(err));
  }

  getUser() {
    const tempUser: string | null = localStorage.getItem('user');
    
    if(tempUser !== null){
      
      if(tempUser === ''){
        this.user = tempUser;
      }
      else{
        this.user = JSON.parse(tempUser)[0];
      }
    }    
  }
}
