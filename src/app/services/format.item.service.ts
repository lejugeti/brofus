import { Injectable } from '@angular/core';
import { DofapiItem, Item } from '../interfaces/item.interface';


@Injectable({
  providedIn: 'root'
})
export class FormatItemService {

  constructor() { }

  formatItem(item: DofapiItem){
    const newItem: Item = {
      id: 0,
      name: '',
      level: 0,
      type: '',
      imgUrl: '',
      statistics: [],
    }
  }
}
