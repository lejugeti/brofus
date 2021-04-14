import {UserService} from '../user.service'
import { AngularFirestore } from '@angular/fire/firestore';

export class User {

    private Id: string = '';
    private Login: string;
    private Wishlist: any;
    private Instance: any;

    constructor(
        login: string, 
        private afs: AngularFirestore) {
            this.Login = login;

            this.afs.collection('users', ref => ref.where("login", "==", login))
            .snapshotChanges()
            .subscribe(result => {
                const metaUser = result[0].payload.doc;
                this.Instance = metaUser.data();
                this.Id = metaUser.id;
                // console.log(this.Instance);

                if(this.Instance.wishlist !== null){
                    this.Wishlist = this.Instance.wishlist;
                }
            })
        }

}