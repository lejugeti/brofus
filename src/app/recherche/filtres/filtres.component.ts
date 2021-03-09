import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { TagObject } from '../../interfaces/tagObject.interface';

@Component({
  selector: 'app-filtres',
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.scss']
})
export class FiltresComponent implements OnInit {

  @Output() addTagEvent= new EventEmitter<TagObject>();
  @Output() removeTagEvent = new EventEmitter<TagObject>();

  constructor() { }

  ngOnInit(): void {
  }


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
  ]
  
  statistiques = [
    {name: "PA", value: false},
    {name: "PM", value: false},
    {name: "Po", value: false},
    {name: "Invoc", value: false},
    {name: "Force", value: false},
    {name: "Intelligence", value: false},
    {name: "Agilité", value: false},
    {name: "Chance", value: false},
    {name: "Vitalité", value: false},
    {name: "Sagesse", value: false},
    {name: "Puissance", value: false},
    {name: "Initiative", value: false},
    {name: "Crit", value: false},
    {name: "Do crit", value: false},
    {name: "Do neutre", value: false},
    {name: "Do terre", value: false},
    {name: "Do air", value: false},
    {name: "Do feu", value: false},
    {name: "Do eau", value: false},
    {name: "Res neutre", value: false},
    {name: "Res terre", value: false},
    {name: "Res air", value: false},
    {name: "Res feu", value: false},
    {name: "Res eau", value: false},
    {name: "% neutre", value: false},
    {name: "% terre", value: false},
    {name: "% air", value: false},
    {name: "% feu", value: false},
    {name: "% eau", value: false},
    {name: "Tacle", value: false},
    {name: "Fuite", value: false},
    {name: "Prospection", value: false},
    {name: "Ret Pa", value: false},
    {name: "Ret Pm", value: false},
    {name: "Res Pa", value: false},
    {name: "Res Pm", value: false},
  ]

  handleTagCheck(checked: boolean, tag: string, type: string) {
    if(checked){
        this.addTagEvent.emit({name: tag, type: type});
    }
    else{
      this.removeTagEvent.emit({name: tag, type: type});
    }
  }
}
