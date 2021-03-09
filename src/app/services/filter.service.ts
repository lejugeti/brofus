import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  search(recherche: string, equipements: Array<any>) {
    if(recherche.length != 0){
      const reg = new RegExp(recherche.toLowerCase());
      const newItemsToShow: Array<any> = [];
  
      equipements.forEach(item => {
        if(reg.test(item.name.toLowerCase())){
          newItemsToShow.push(item);
        }
      })
  
      return newItemsToShow;
    }
    else{
      return equipements;
    }
    
  }
}
