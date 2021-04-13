import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { TagObject } from '../../interfaces/tagObject.interface';
import { ILevelFilter } from '../../interfaces/level.filter.interface';

@Component({
  selector: 'app-filtres',
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.scss']
})
export class FiltresComponent implements OnInit {

  @Output() addTagEvent= new EventEmitter<TagObject>();
  @Output() removeTagEvent = new EventEmitter<TagObject>();
  @Output() changeLvlEvent = new EventEmitter<ILevelFilter>();

  levelValues: ILevelFilter = {min: 0, max: 200};

  constructor() { }

  ngOnInit(): void {
  }

  levels = [
    {name: "0", value: 0},
    {name: "20", value: 20},
    {name: "40", value: 40},
    {name: "60", value: 60},
    {name: "80", value: 80},
    {name: "100", value: 100},
    {name: "120", value: 120},
    {name: "140", value: 140},
    {name: "160", value: 160},
    {name: "180", value: 180},
    {name: "200", value: 200}
  ];

  typeEquipement = [
    {name: "Cape", value: false},
    {name: "Chapeau", value: false},
    {name: "Anneau", value: false},
    {name: "Amulette", value: false},
    {name: "Bottes", value: false},
    {name: "Ceinture", value: false},
    {name: "Arc", value: false},
    {name: "Baguette", value: false},
    {name: "Hâche", value: false},
    {name: "Epée", value: false},
    {name: "Dagues", value: false},
    {name: "Baton", value: false},
    {name: "Faux", value: false},
    {name: "Pelle", value: false},
    {name: "Pioche", value: false}
  ];
  
  statistiques = [
    {name: "PA", value: false},
    {name: "PM", value: false},
    {name: "Portée", value: false},
    {name: "Invocations", value: false},
    {name: "Force", value: false},
    {name: "Intelligence", value: false},
    {name: "Agilité", value: false},
    {name: "Chance", value: false},
    {name: "Vitalité", value: false},
    {name: "Sagesse", value: false},
    {name: "Puissance", value: false},
    {name: "Initiative", value: false},
    {name: "% Critique", value: false},
    {name: "Dommages Critiques", value: false},
    {name: "Dommages Neutre", value: false},
    {name: "Dommages Terre", value: false},
    {name: "Dommages Air", value: false},
    {name: "Dommages Feu", value: false},
    {name: "Dommages Eau", value: false},
    {name: "Résistance Critiques", value: false},
    {name: "Résistance Neutre", value: false},
    {name: "Résistance Terre", value: false},
    {name: "Résistance Air", value: false},
    {name: "Résistance Feu", value: false},
    {name: "Résistance Eau", value: false},
    {name: "% Résistance Neutre", value: false},
    {name: "% Résistance Terre", value: false},
    {name: "% Résistance Air", value: false},
    {name: "% Résistance Feu", value: false},
    {name: "% Résistance Eau", value: false},
    {name: "Soins", value: false},
    {name: "Tacle", value: false},
    {name: "Fuite", value: false},
    {name: "Prospection", value: false},
    {name: "Retrait PA", value: false},
    {name: "Retrait PM", value: false},
    {name: "Esquive PA", value: false},
    {name: "Esquive PM", value: false},
  ];

  handleTagCheck(checked: boolean, tag: string, type: string) {
    if(checked){
        this.addTagEvent.emit({name: tag, type: type});
    }
    else{
      this.removeTagEvent.emit({name: tag, type: type});
    }
  }

  handleLevelChange() {
    this.changeLvlEvent.emit(this.levelValues);
  }
}
