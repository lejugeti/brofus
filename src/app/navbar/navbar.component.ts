import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any; 

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.checkIfUserIsConnected();
    // console.log(localStorage.getItem('user'));
  }

  checkIfUserIsConnected() {
    // on essaye de récupérer le user connecté
    if(this.user === ''){
      this.user = localStorage.getItem('user')
      // console.log(this.user);
    }
    // console.log(localStorage);
    // this.user = localStorage.getItem('user');

    return this.user !== '';
  }
}
