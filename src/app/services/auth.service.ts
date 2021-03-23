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

  signUpEmailPassword(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      this.userData = res.user;
      localStorage.setItem('user', JSON.stringify(this.userData));
      this.router.navigate(['/recherche']);
      // console.log(this.userData);
    })
    .catch(error => alert(error));
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
