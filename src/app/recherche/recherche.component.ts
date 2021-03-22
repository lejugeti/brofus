import { Component, OnInit } from '@angular/core';
import { GetItemsService } from '../services/get-items.service';
import { FilterService } from '../services/filter.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HostListener } from '@angular/core'
import { TagObject } from '../interfaces/tagObject.interface';
import { ITags, Tags } from '../interfaces/tags.interface';
import { ILevelFilter } from '../interfaces/level.filter.interface';
import { DofapiItem, Item } from '../interfaces/item.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  
  recherche = '';
  equipements: Array<Item> = [];
  itemsToShow: Array<Item> = [];
  tags: Tags = new Tags([], []);
  levelMin: number = 0;
  levelMax: number = 200;

  constructor(
    private itemsService: GetItemsService,
    private filterService: FilterService,
    private afs: AngularFirestore) {}

  ngOnInit(): void {
    // this.itemsService.getSingleEquipment(701).subscribe(data => {
    //   // console.log(data);
    //   this.equipements.push(data);
    // });

    // this.itemsService.getEquipments().subscribe(data => {
    //   data.forEach(item => {
    //     this.equipements.push(item);
    //   });
    // });
    // this.itemsToShow = this.equipements;

    this.afs.collection<Item>('items', ref=> ref.where('level', "<", 180).orderBy("level", "desc").limit(100))
      .valueChanges().subscribe(items =>{
      this.itemsToShow = items;
      this.equipements = items;
      // console.log(this.itemsToShow[0]);
      // console.log(this.filterService.extractStats(this.itemsToShow[0]));
      // console.log(this.filterService.checkStatTags(["% Résistance Terre"], this.filterService.extractStats(this.itemsToShow[0])));

    })
    
    
  }
  
  @HostListener('document:keydown', ['$event'])
  searchHandler(event: KeyboardEvent) {
    const focusedElement = document.activeElement?.id;
    const key = event.key;

    if(key === "Enter"){
      this.itemsToShow = this.filterService.searchAndFilter(this.recherche, this.tags, this.levelMin, this.levelMax, this.equipements);
    }
  }
  
  addTag(tag: TagObject) {
    if(tag.type === 'type'){
      this.tags.types.push(tag.name);
    }
    else if(tag.type === 'stat'){
      this.tags.stats.push(tag.name);
    }
    console.log(this.tags.stats);
    this.itemsToShow = this.filterService.searchAndFilter(this.recherche, this.tags, this.levelMin, this.levelMax, this.equipements);
  }

  removeTag(tag: TagObject) {
    if(tag.type === 'type'){
      this.tags.types = this.tags.types.filter(type => type !== tag.name);
    }
    else if(tag.type === 'stat'){
      this.tags.stats = this.tags.stats.filter(stat => stat !== tag.name);
    }

    console.log(this.tags.stats);
    this.itemsToShow = this.filterService.searchAndFilter(this.recherche, this.tags, this.levelMin, this.levelMax, this.equipements);
  }

  changeLevelFilter(levelValues: ILevelFilter){
    this.levelMin = levelValues.min;
    this.levelMax = levelValues.max;
    this.itemsToShow = this.filterService.searchAndFilter(this.recherche, this.tags, this.levelMin, this.levelMax, this.equipements);
    
    console.log(`Min : ${this.levelMin} \nMin : ${this.levelMax}`);
  }
}

