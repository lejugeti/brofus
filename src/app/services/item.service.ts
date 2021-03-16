import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DofapiItem } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(  private firestore: AngularFirestore) { }

  insertItem(item: DofapiItem) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
      .collection("items")
      .add(item)
      .then(res => {}, err => {reject(err)});
    });
  }
}
