import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { Tags } from '../interfaces/tags.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  search(recherche: string, equipements: Array<any>, tags: Tags) {
    if(recherche.length != 0){
      const reg = new RegExp(recherche.toLowerCase());
      const newItemsToShow: Array<any> = [];
  
      equipements.forEach(item => {
        if(reg.test(item.name.toLowerCase())){
          newItemsToShow.push(item);
        }
      })
  
      return this.filterItems(tags, newItemsToShow);
    }
    else{
      return equipements;
    }
    
  }
  
  filterItems(tags: Tags, itemList: Array<Item>) {
    let newItemList = this.filterByTypes(tags.types, itemList);
    console.log(newItemList);

    return newItemList;
  }
  private filterByTypes(typeTags: Array<string>, itemList: Array<Item>){
    if(typeTags.length != 0){
      return itemList.filter(item => typeTags.includes(item.type))
    }
    else{
      return itemList;
    }
  }
  private filterByStats(statTags: Array<string>, itemList: Array<Item>){

  }
  private filterByLevel(typeTags: Array<string>, itemList: Array<Item>){
    
  }
  extractStats(item: Item) {
    let stats: Array<string> = [];

    item.statistics.forEach(stat => {
      let statName = Object.keys(stat)[0];
      stats.push(statName);
    })

    return stats;
  }
}
