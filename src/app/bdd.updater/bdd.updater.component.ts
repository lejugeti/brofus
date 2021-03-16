import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { GetItemsService } from '../services/get-items.service';
import { DofapiItem } from '../interfaces/item.interface';

@Component({
  selector: 'app-bdd.updater',
  templateUrl: './bdd.updater.component.html',
  styleUrls: ['./bdd.updater.component.scss']
})
export class BddUpdaterComponent implements OnInit {

  itemsToUpload: DofapiItem[] = [];
    
  constructor( 
      private getItemService: GetItemsService,
      private afs: AngularFirestore) {

  }

  ngOnInit(){
    this.getItemService.getSingleEquipment(701).subscribe(res => {
      this.itemsToUpload.push(res);
      console.log(res);
    });
  }
}
