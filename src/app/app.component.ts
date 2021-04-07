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
    
    // this.router.navigate(['/connexion']);
    // console.log(localStorage.getItem("user"));

    // initialise l'instance du user à l'arrivée sur le site sauf s'il est déjà connecté
    if(localStorage.length == 0){
      localStorage.setItem('user', '');
    }
  };
}
