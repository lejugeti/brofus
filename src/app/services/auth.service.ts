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
  userSubscription: any = null;

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
      userCollection.add({login: login, email: email});
      // userCollection.add({login: login, email: email, password: password});
    })
    .catch(error => alert(error));
  }

  loginEmailPassword(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email, password)
    .then(async (user) => {
      const userCollection = this.afs.collection<any>('users', ref => ref.where("email", "==", email));
      
      this.userSubscription = userCollection.valueChanges().subscribe(data => {
        this.userData = JSON.stringify(data);
        localStorage.setItem('user', this.userData);
        this.router.navigate(['/recherche']);
        this.userSubscription.unsubscribe();
      })
            
    })
    .catch(err => {
      alert(err);
    });
  }

  logout() {
    
    return this.auth.signOut()
    .then(res => {
      localStorage.setItem('user', '');
      // console.log(localStorage);
      alert('Vous avez été déconnecté !')

      return new Promise<boolean>((resolve, reject) => {
        resolve(true);
        reject(false);
      })
    })
    .catch(error => alert(error));
    
  }

  private getUserByMail(email: string){
    
    return this.afs.collection<any>('users').valueChanges();
  }
}
