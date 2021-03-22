import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { Tags } from '../interfaces/tags.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  searchAndFilter(recherche: string, equipements: Array<any>, tags: Tags) {
    let filteredItems: Item[] = this.filterItems(tags, equipements);
    // console.log(filteredItems);
    // console.log(`Recherche : ${recherche}`);

    if(recherche.length != 0){
      const reg = new RegExp(recherche.toLowerCase());   
      let newItemsToShow = filteredItems.filter(item => reg.test(item.name.toLowerCase()));
  
      return newItemsToShow;
    }
    else{
      return filteredItems;
    }
  }
  
  // Filtre les items en fonctions des tags choisis s'il y en a
  filterItems(tags: Tags, itemList: Array<Item>) {

    if(tags.stats.length !== 0 || tags.types.length !== 0){
      let newItemList = this.filterByTypes(tags.types, itemList);
      newItemList = this.filterByStats(tags.stats, newItemList);
      // console.log(newItemList);

      return newItemList;
    }
    else{
      return itemList;
    }
  }

  // Filtre les items en fonction de l'ensemble des types d'item sélectionnés
  private filterByTypes(typeTags: Array<string>, itemList: Array<Item>){
    if(typeTags.length != 0){
      return itemList.filter(item => typeTags.includes(item.type))
    }
    else{
      return itemList;
    }
  }

  // Filtre les items en fonction des tags de statistiques
  private filterByStats(statTags: Array<string>, itemList: Array<Item>){
    if(statTags.length != 0){
      return itemList.filter(item => this.checkStatTags(statTags, this.extractStats(item)));
    }
    else{
      return itemList;
    }
  }

  // Filtre les items en fonction des tags de niveau
  private filterByLevel(typeTags: Array<string>, itemList: Array<Item>){
    
  }

  // Extrait les noms des statistiques d'un Item donnné
  extractStats(item: Item) {
    let stats: Array<string> = [];

    item.statistics.forEach(stat => {
      let statName = Object.keys(stat)[0];
      stats.push(statName);
    })

    return stats;
  }

  checkStatTags(statTags: string[], stats: string[]){
    let toAdd = false;
    stats.forEach(stat => {
      if(statTags.includes(stat)){
        toAdd = true;
      }
    });

    return toAdd;
  }
}
