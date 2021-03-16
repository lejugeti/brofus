import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { GetItemsService } from '../services/get-items.service';
import { ItemService } from '../services/item.service';
import { CalculateurItemService } from '../services/calculateur.item.service';
import { DofapiItem } from '../interfaces/item.interface';
import { IObject } from '../interfaces/object.interface';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { serveurs } from '../services/serveurs'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calculateur',
  templateUrl: './calculateur.component.html',
  styleUrls: ['./calculateur.component.scss']
})
export class CalculateurComponent implements OnInit {
  itemCollection: AngularFirestoreCollection<DofapiItem>;
  items: Observable<DofapiItem[]>;
  item: DofapiItem;
  serveurs = serveurs;
  prixCraft = 0;
  coefficient = 100;
  selectedServeur = '';
  puiMin = 0;
  puiMax = 0;
  puiItem = 0;

  // icons
  faArrowLeft = faArrowLeft;
  faHeart = faHeart;

  // validators
  numberInputControl = new FormControl('1', [
    Validators.required,
    Validators.pattern('[1-9]*')
  ])

  
  constructor(private itemService: GetItemsService, 
    private route: ActivatedRoute, 
    private location: Location,
    private calculateur: CalculateurItemService,
    private fireService: ItemService,
    private afs: AngularFirestore) {
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

    this.itemCollection = this.afs.collection<DofapiItem>("items");
    this.items = this.itemCollection.valueChanges();
    
    this.items.subscribe(res =>{
      console.log(res)
    })
    
    
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

    });

    
  }

  goBack() {
    this.location.back();
  }

}
