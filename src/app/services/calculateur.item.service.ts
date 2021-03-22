import { Injectable, Input } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { poids } from './statistiques.poids'
import { IObject } from '../interfaces/object.interface';

@Injectable({
  providedIn: 'root'
})
export class CalculateurItemService {
  
  item: Item;
  
  constructor() { 
    this.item = { 
      id: 0,
      ankamaId: 0,
      name: '', 
      level: 0, 
      type: '',
      imgUrl: '',
      statistics: [],
    };
  }

  init(receivedItem: Item){
    this.item = receivedItem;
  }

  initTableInfo(){
    let tableInfo: any[] = [];

    this.item.statistics.forEach( stat => {
      const entries = Object.entries(stat)[0];
      const key = entries[0];
      const montantStat = this.filterStatMoy(entries[1]);
      const puiStat = poids[key];
      // console.log(montantStat);
      tableInfo.push({name: key, montant: montantStat, prixRune: 10, pui: puiStat});
    });

    // console.log(tableInfo);
    return tableInfo;
  }

  calculPuiMin() {
    let puiMin = 0;
    this.item.statistics.forEach(stat => {
      const entries = Object.entries(stat)[0];
      const key = entries[0];
      const puiRune = poids[key];
      const statMin = this.filterGivenStat(entries[1], 'min');
      const puiStatmin = statMin * puiRune;
      puiMin += puiStatmin;
    });

    return puiMin;
  }

  calculPuiMax() {
    let puiMax = 0;
    this.item.statistics.forEach(stat => {
      const entries = Object.entries(stat)[0];
      const key = entries[0];
      const puiRune = poids[key];
      const statMax = this.filterGivenStat(entries[1], 'max');
      const puiStatmax = statMax * puiRune;
      puiMax += puiStatmax;
    });

    return puiMax;
  }
  
  calculPuiItem(){
    return 0;
  }

  private filterGivenStat(stats: any, statVoulue: string){
    const statMin = stats.min;
    const statMax = stats.max;

    if(statVoulue === "min"){
      return this.filterStatMin(statMin);
    }
    else if(statVoulue === "max"){
      if(statMax < 0){
        return 0;
      }
      else if(statMax === null){
        return this.filterStatMin(statMin);
      }
      else{
        return statMax;
      }
    }
    else{
      return 0;
    }
  }

  private filterStatMin(stat: number){
    if(stat < 0){
      return 0;
    }
    else{
      return stat;
    }
  }

  private filterStatMoy(stats: any){
    const statMin = stats.min;
    const statMax = stats.max;

    if(statMin < 0){
      return statMin;
    }
    else if(statMax === null){
      return statMin;
    }
    else{
      return Math.round((statMin + statMax) / 2);
    }
  }

  calculQuantiteRunes(montantStat: number, puiStat: number, puiItem: number, coef: number) {
    if(montantStat < 0){
      return 0;
    }
    else{
      return (puiItem / puiStat) * (coef/100);
    }
  }

  calculGainTotal(montantStat: number, puiStat: number, puiItem: number, prixRune: number, coef: number) {
    return this.calculQuantiteRunes(montantStat, puiStat, puiItem, coef) * prixRune;
  }

  calculRentabilite(montantStat: number, puiStat: number, puiItem: number, prixCraft: number, prixRune: number, coef: number) {
    return this.calculGainTotal(montantStat, puiStat, puiItem, prixRune, coef) - prixCraft;
  }

  calculCoefRentabilite(montantStat: number, puiStat: number, puiItem: number, prixCraft: number, prixRune: number, coef: number) {
    return (100 * prixCraft * puiStat) / (puiItem * prixRune);
  }

}
