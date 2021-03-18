import { Injectable } from '@angular/core';
import { DofapiItem, Item } from '../interfaces/item.interface';
import { IObject } from '../interfaces/object.interface';


@Injectable({
  providedIn: 'root'
})
export class FormatItemService {

  constructor() { }

  formatItem(item: DofapiItem, idItem: number){
    const newItem: Item = {
      id: idItem,
      ankamaId: item.ankamaId,
      name: item.name,
      level: item.level,
      type: item.type,
      imgUrl: item.imgUrl,
      statistics: this.formatStats(item.statistics),
    }

    return newItem;
  }

  private formatStats(stats: Array<object>) {
    let newStats: Array<any> = [];
    stats.forEach( stat => {
      const entries = Object.entries(stat)[0];
      const key = this.filterStatName(entries[0]);
      const montants = entries[1];
      newStats.push({[key]: montants});
    });

    return newStats;
  }

  private filterStatName(statName: string){
    const regCrit = new RegExp('% Crit');
    const regNeutre = new RegExp('% Résistance Neutre');
    const regFeu= new RegExp('% Résistance Feu');
    const regAir = new RegExp('% Résistance Air');
    const regEau= new RegExp('% Résistance Eau');
    const regTerre = new RegExp('% Résistance Terre');

    if(regCrit.test(statName)){
      return '% Critique';
    }
    else if(regNeutre.test(statName)){
      return '% Résistance Neutre';
    }
    else if(regFeu.test(statName)){
      return '% Résistance Feu';
    }
    else if(regAir.test(statName)){
      return '% Résistance Air';
    }
    else if(regEau.test(statName)){
      return '% Résistance Eau';
    }
    else if(regTerre.test(statName)){
      return '% Résistance Terre';
    }
    else{
      return statName;
    }
  }
}
