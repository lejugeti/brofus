import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    public auth: AngularFireAuth,
    public afs: AngularFirestore,
    private router: Router) { 
    
  }

  signUpEmailPassword(email: string, password: string, login: string) {
    this.auth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      this.userData = res.user;
      sessionStorage.setItem('user', JSON.stringify(this.userData));
      this.router.navigate(['/recherche']);
      // console.log(this.userData);

      const userCollection = this.afs.collection('users');
      userCollection.add({login: login, email: email, password: password});
    })
    .catch(error => alert(error));
  }

  loginEmailPassword(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email, password)
    .then(user =>{
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
      // console.log(localStorage.getItem('user'));
      // sessionStorage.setItem('user', JSON.stringify(this.userData));
      // console.log(sessionStorage.getItem('user'));
      this.router.navigate(['/recherche']);
    })
    .catch(err => {
      alert(err);
    });
  }

  logout() {
    localStorage.setItem('user', '');
    this.auth.signOut();
    alert('Vous avez été déconnecté !');
  }

  
}
