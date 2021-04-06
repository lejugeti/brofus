import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkUserConnected() {
    const user = sessionStorage.getItem('user');
    const cond1 = user !== null;
    
    return cond1;
  }
}
