import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtres',
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.scss']
})
export class FiltresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  typeEquipement = [
    {name: "Cape"},
    {name: "Coiffe"},
    {name: "Anneau"},
    {name: "Amulette"},
    {name: "Bottes"},
    {name: "Ceinture"},
    {name: "Arc"},
    {name: "Baguette"},
    {name: "Hâche"},
    {name: "Epée"},
    {name: "Dagues"},
    {name: "Baton"},
    {name: "Faux"},
    {name: "Pelle"},
    {name: "Pioche"}
  ]
  
  statistiques = [
    {name: "PA"},
    {name: "PM"},
    {name: "Po"},
    {name: "Invoc"},
    {name: "Force"},
    {name: "Intelligence"},
    {name: "Agilité"},
    {name: "Chance"},
    {name: "Vitalité"},
    {name: "Sagesse"},
    {name: "Puissance"},
    {name: "Initiative"},
    {name: "Crit"},
    {name: "Do crit"},
    {name: "Do neutre"},
    {name: "Do terre"},
    {name: "Do air"},
    {name: "Do feu"},
    {name: "Do eau"},
    {name: "Res neutre"},
    {name: "Res terre"},
    {name: "Res air"},
    {name: "Res feu"},
    {name: "Res eau"},
    {name: "% neutre"},
    {name: "% terre"},
    {name: "% air"},
    {name: "% feu"},
    {name: "% eau"},
    {name: "Tacle"},
    {name: "Fuite"},
    {name: "Prospection"}
  ]

  
}
