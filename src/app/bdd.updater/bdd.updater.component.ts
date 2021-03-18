import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormatItemService } from '../services/format.item.service';
import { ItemSorterService } from '../services/item.sorter.service';
import { GetItemsService } from '../services/get-items.service';
import { DofapiItem, Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-bdd.updater',
  templateUrl: './bdd.updater.component.html',
  styleUrls: ['./bdd.updater.component.scss']
})
export class BddUpdaterComponent implements OnInit {

  itemsToUpload: Item[] = [];
  itemCollection = this.afs.collection<Item>('items');
  items = this.itemCollection.valueChanges();

  constructor( 
      private getItemService: GetItemsService,
      private afs: AngularFirestore,
      private itemFormater: FormatItemService,
      private sorter: ItemSorterService) {}

  ngOnInit(){
    // this.getItemService.getEquipments().subscribe(items => {

    //   const sortedItems = this.sorter.sortByAnkaIdAscending(items);

    //   for(let i = 0; i< 5; i++){
    //     let item = this.itemFormater.formatItem(sortedItems[i], i+1);
    //     this.itemsToUpload.push(item);

    //     this.itemCollection.add(item);
    //   }
    // });

    // this.deleteAllItems();
  }

  deleteAllItems() {

    this.itemCollection.snapshotChanges().subscribe(snapshot => {
      snapshot.forEach(item =>
        this.itemCollection.doc(item.payload.doc.id).delete()
      );
    })
  }

  
}
