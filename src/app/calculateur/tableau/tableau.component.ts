import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { CalculateurItemService } from '../../services/calculateur.item.service'
import { Item } from '../../interfaces/item.interface';
import { path, pathRunes } from './paths.icons';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

  @Input() item: Item;
  @Input() puiMin: number;
  @Input() puiMax: number;
  @Input() coefficient: number;
  @Input() prixCraft: number;
  
  puiItem : number;
  tableauStats: any[];
  displayedColumns: string[] = ['Statistique', 'Montant', 'QuantiteRunes', 'PrixRune', 'TotalGain', 'Rentabilite', 'CoefNecessaire']
  svgStyle = { 'width.em': 2 }

  path = path;
  pathRunes = pathRunes;

  constructor(
    private calculateur: CalculateurItemService,
    private iconRegister: MatIconRegistry){ 
    
      this.item = { 
      id: 0,
      ankamaId: 0,
      name: '', 
      level: 0, 
      type: '',
      imgUrl: '',
      statistics: [],
    };
    this.puiMin = 0;
    this.puiMax = 0;
    this.puiItem = 0;
    this.coefficient = 0;
    this.prixCraft = 0;
    this.tableauStats = [];
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.item != null){
      this.item = changes.item.currentValue;
      this.tableauStats = this.calculateur.initTableInfo();
      console.log(this.tableauStats);
    }
    if(changes.puiMin != null){
      this.puiMin = changes.puiMin.currentValue;
    }
    if(changes.puiMax != null){
      this.puiMax = changes.puiMax.currentValue;
    }
    if(changes.coefficient != null){
      this.coefficient = changes.coefficient.currentValue;
    }
    if(changes.prixCraft != null){
      this.prixCraft = changes.prixCraft.currentValue;
    }
    if(changes.itableauStatstem != null){
      this.tableauStats = changes.tableauStats.currentValue;
    }
  }

  getQuantiteRunes(montantStat: number, puiStat: number) {
    return this.calculateur.calculQuantiteRunes(montantStat, puiStat, this.puiMin, this.coefficient).toFixed(0);
  }

  getGainTotal(montantStat: number, puiStat: number, prixRune: number) {
    return this.calculateur.calculGainTotal(montantStat, puiStat, this.puiMin, prixRune, this.coefficient).toFixed(0);
  }

  getRentabilite(montantStat: number, puiStat: number, prixRune: number) {
    return this.calculateur.calculRentabilite(montantStat, puiStat, this.puiMin, this.prixCraft, prixRune, this.coefficient).toFixed(0);
  }

  getCoefRentabilite(montantStat: number, puiStat: number, prixRune: number) {
    return this.calculateur.calculCoefRentabilite(montantStat, puiStat, this.puiMin, this.prixCraft, prixRune, this.coefficient).toFixed(2);
  }


}
