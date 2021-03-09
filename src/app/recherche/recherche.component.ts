import { Component, OnInit } from '@angular/core';
import { GetItemsService } from '../services/get-items.service';
import { FilterService } from '../services/filter.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HostListener } from '@angular/core'
import { TagObject } from '../interfaces/tagObject.interface';
import { Tags } from '../interfaces/tags.interface';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  
  recherche = '';
  equipements: Array<Item> = [];
  itemsToShow: Array<Item> = [];
  tags: Tags = {types: [], stats: []};

  constructor(
    private itemsService: GetItemsService,
    private filterService: FilterService) {}

  ngOnInit(): void {
    this.itemsService.getSingleEquipment(701).subscribe(data => {
      // console.log(data);
      this.equipements.push(data);
    });

    // this.itemsService.getEquipments().subscribe(data => {
    //   data.forEach(item => {
    //     this.equipements.push(item);
    //   });
    // });

    this.itemsToShow = this.equipements;

  }
  
  @HostListener('document:keydown', ['$event'])
  searchHandler(event: KeyboardEvent) {
    // console.log(document.activeElement?.id);

    const focusedElement = document.activeElement?.id;
    const key = event.key;

    if(key === "Enter"){
      this.itemsToShow = this.filterService.search(this.recherche, this.equipements, this.tags);
    }
  }
  
  addTag(tag: TagObject) {
    if(tag.type === 'type'){
      this.tags.types.push(tag.name);
    }
    else if(tag.type === 'stat'){
      this.tags.stats.push(tag.name);
    }
  }

  removeTag(tag: TagObject) {
    if(tag.type === 'type'){
      this.tags.types = this.tags.types.filter(type => type !== tag.name);
    }
    else if(tag.type === 'stat'){
      this.tags.stats = this.tags.stats.filter(stat => stat !== tag.name);
    }
  }
}

