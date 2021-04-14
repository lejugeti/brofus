import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any = {};

  constructor(private afs: AngularFirestore) { }


  getWishlist() {
    return this.user.Wishlist;
  }

}
