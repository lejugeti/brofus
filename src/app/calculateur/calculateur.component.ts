import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { GetItemsService } from '../services/get-items.service';
import { CalculateurItemService } from '../services/calculateur.item.service';
import { Item } from '../interfaces/item.interface';
import { IObject } from '../interfaces/object.interface';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { serveurs } from '../services/serveurs'

@Component({
  selector: 'app-calculateur',
  templateUrl: './calculateur.component.html',
  styleUrls: ['./calculateur.component.scss']
})
export class CalculateurComponent implements OnInit {
  
  item: Item;
  infosTableau: any[] = [];
  serveurs = serveurs;
  prixCraft = 0;
  coefficient = 100;
  selectedServeur = '';
  puiMin = 0;
  puiMax = 0;
  puiParStat: any[] = [];
  puiItem = 0;
  error= true;

  // icons
  faArrowLeft = faArrowLeft;
  faHeart = faHeart;

  // validators
  numberInputControl = new FormControl('1', [
    Validators.required,
    Validators.pattern('[1-9]*')
  ])

  // columns for table
  displayedColumns: string[] = ['Statistique', 'Montant', 'QuantiteRunes', 'PrixRune', 'TotalGain', 'Rentabilite', 'CoefNecessaire']
  
  constructor(private itemService: GetItemsService, 
    private route: ActivatedRoute, 
    private location: Location,
    private calculateur: CalculateurItemService) {
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
      setId: 0
    };

   }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const itemId = Number(routeParams.get('itemId'));
    this.itemService.getSingleEquipment(itemId).subscribe(res => {
      this.item = res;
      this.calculateur.init(this.item);
      this.puiMin = this.calculateur.calculPuiMin();
      this.puiMax = this.calculateur.calculPuiMax();
      this.puiItem = this.calculateur.calculPuiItem();
      this.infosTableau = this.calculateur.initTableInfo();
    });
  }

  goBack() {
    this.location.back();
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
