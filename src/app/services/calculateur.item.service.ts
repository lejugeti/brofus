import { Injectable, Input } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { poids } from './statistiques.poids'
import { IObject } from '../interfaces/object.interface';

@Injectable({
  providedIn: 'root'
})
export class CalculateurItemService {
  
  item: Item;
  puiMin: number;
  puiMax: number;
  puiParStat: IObject = {};
  puiMoyenParStat: IObject = {};
  
  constructor() { 
    this.item = { 
      _id: 0,
      ankamaId: 0,
      name: '', 
      level: 0, 
      type: '',
      imgUrl: '',
      url: '',
      description: '',
      statistics: [],
      conditions: [],
      recipe: [],
      setId:0
    };

    this.puiMin = 0;
    this.puiMax = 0;

  }

  init(receivedItem: Item){
    this.item = receivedItem;
    this.calculPuiMinMax();
    this.calculPuiMoyen();
  }

  calculPuiMinMax() {

    this.item.statistics.forEach(stat => {
      
      const entries = Object.entries(stat)[0];
      const key = entries[0];
      const puiRune = poids[key];
      const puiStatmin = entries[1].min * puiRune;
      const puiStatmax = entries[1].max * puiRune;
      this.puiMin += puiStatmin;
      this.puiMax += puiStatmax;
      
    });
  }

  // récupère le pui moyen pour chaque stat et les renvoient 
  // dans un objet
  private calculPuiMoyen() {
    this.item.statistics.forEach( stat => {
      const entries = Object.entries(stat)[0];
      const key = entries[0];
      const puiMoyen = this.getFilteredPui(entries);
      this.puiMoyenParStat[key] = puiMoyen;
      console.log(puiMoyen);
    });
  }

  // filtre et renvoie le pui moyen pour une stat donnée
  // stat étant un array contenant la clé de la stat et les valeurs associées
  private getFilteredPui(stat: any){
    const key = stat[0];
    const valeurs = stat[1];

    if(valeurs.max === null){
      const puiMoyen = poids[key] * this.filterPui(valeurs.min);
      return Number(puiMoyen.toFixed(2));
    }
    else{
      const puiMin = this.filterPui(valeurs.min);
      const puiMax = this.filterPui(valeurs.max);
      const puiMoyen = poids[key] * (puiMin + puiMax) / 2;

      return Number(puiMoyen.toFixed(2));
    }
    
  }

  private filterPui(pui: number){
    if(pui < 0){
      return 0;
    }
    else{
      return pui;
    }
  }
}
