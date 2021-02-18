import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brofus';

  public constructor(private titleService: Title, private router: Router){
    this.titleService.setTitle("Brofus");
    // this.router.navigate(['/connexion']);
  };
  
  
}
