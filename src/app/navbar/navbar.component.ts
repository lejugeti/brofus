import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  checkUserConnected() {

    // on essaye de récupérer le user connecté
    // if(this.user === null){
    //   this.user = sessionStorage.getItem('user');
    // }
    
    return this.user !== null;
  }
}
