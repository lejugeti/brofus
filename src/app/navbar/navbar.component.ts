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
    this.user = localStorage.getItem('user');
  }

  checkIfUserIsConnected() {
    // on essaye de récupérer le user connecté
    if(this.user === ''){
      this.user = localStorage.getItem('user')
    }

    return this.user !== '';
  }


  logout(){
    this.authService.logout()
    .then(success => {
      if(success){
        this.ngOnInit();
      }
    })
    .catch(err => alert(err));
  }
}
