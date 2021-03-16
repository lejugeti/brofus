import { AngularFirestore } from '@angular/fire/firestore';

import { GetItemsService } from '../src/app/services/get-items.service';
import { Item } from '../src/app/interfaces/item.interface';

class DbManager {

    itemsToUpload: Item[] = [];
    
    constructor( 
        private getItemService: GetItemsService,
        private afs: AngularFirestore) {

            getItemService.getSingleEquipment(701).subscribe(res => {
                this.itemsToUpload.push(res);
                console.log(res);
            })
    }


}