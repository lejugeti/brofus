import { Injectable } from '@angular/core';
import { DofapiItem } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemSorterService {

  constructor() { }

  sortByAnkaIdAscending(items: Array<DofapiItem>){
    items.sort(this.compareByAnkaIdAscending);

    return items;
  }

  private compareByAnkaIdAscending(item1: DofapiItem, item2: DofapiItem){
    if(item1.ankamaId < item2.ankamaId){
      return -1;
    }
    else{
      return 1;
    }
  }
}
