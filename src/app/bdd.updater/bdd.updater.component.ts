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

  itemCollection = this.afs.collection<Item>('items');
  itemsToDelete: any[] = [];
  progress = 0;

  constructor( 
      private getItemService: GetItemsService,
      private afs: AngularFirestore,
      private itemFormater: FormatItemService,
      private sorter: ItemSorterService) {}

  ngOnInit(){
  

    // this.itemCollection.valueChanges().subscribe(items => {
    //   console.log(`Il y a actuellement ${items.length} items dans la bdd`);
    // });

    // const test = this.afs.collection('items', ref => ref.where('id', '==', 1).where('type', '==', 'Amulette'));
    // test.valueChanges().subscribe(items => {
    //   console.log(items);
    // });
  }

  updateItems(){

    
    this.getItemService.getEquipments().subscribe(items => {

      const sortedItems = this.sorter.sortByAnkaIdAscending(items);

      for(let i = 0; i < sortedItems.length; i++){
        let item = sortedItems[i];
        try{
          if(item.statistics != null){
            let newItem = this.itemFormater.formatItem(item, i+1);
            this.itemCollection.add(newItem);
            this.progress = 100 * (i+1)/sortedItems.length;
          }
          
        }
        catch(error){
          console.log(`Il y a eu une erreur : ${error} associée à l'item\n ${item}`);
          break;
        }
        
      }
    });
  }

  

  
}

  

