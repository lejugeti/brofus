import { Component, OnInit } from '@angular/core';
import { GetItemsService } from '../services/get-items.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  
  item: Array<any>;
  equipements: Array<any> = [];

  constructor(private itemsService: GetItemsService) {
    this.item = [];
   }

  ngOnInit(): void {
    this.itemsService.getSingleEquipment(700).subscribe(data => {
      this.item = data;
      console.log(data);
      this.equipements.push(data)
    });

  }
  
  // equipements = [
  //   { id: 0, nom: "Cape du piou bleu", typeEquipement:"Cape", lvl: 18, pathImg: "link.png", dernierBrisage:"10/10/2020", coefficient: 100, rentabiliteKamas: 24000, rentabiliteProportion: 120 },
  //   { id: 1, nom: "Cape de Klime", typeEquipement:"Cape", lvl: 200, pathImg: "link.png", dernierBrisage:"10/10/2020", coefficient: 100, rentabiliteKamas: 24000, rentabiliteProportion: 120 },
  //   { id: 1, nom: "Cape de Klime", typeEquipement:"Cape", lvl: 200, pathImg: "link.png", dernierBrisage:"10/10/2020", coefficient: 100, rentabiliteKamas: 24000, rentabiliteProportion: 120 },
  //   { id: 1, nom: "cape de klime", typeEquipement:"Cape", lvl: 200, pathImg: "link.png", dernierBrisage:"10/10/2020", coefficient: 100, rentabiliteKamas: 24000, rentabiliteProportion: 120 },

  // ]
}

