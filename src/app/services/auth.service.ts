import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    public auth: AngularFireAuth,
    private router: Router) { 
    
  }

  signInEmailPassword(email: string, password: string) {
    // this.auth.
  }

  loginEmailPassword(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email, password)
    .then(user =>{
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
      this.router.navigate(['/recherche']);
    })
    .catch(err => {
      alert(err);
    });
  }

  logout() {
    this.auth.signOut();
    alert('Vous avez été déconnecté !');
  }
}
