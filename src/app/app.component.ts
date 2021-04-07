import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brofus';

  public constructor(private titleService: Title, private router: Router, private auth: AuthService){
    this.titleService.setTitle("Brofus");
    sessionStorage.setItem('user', '');
    // this.router.navigate(['/connexion']);
    // console.log(localStorage.getItem("user"));
  };
  
  handleLogout(){
    this.auth.logout();
  }
}
