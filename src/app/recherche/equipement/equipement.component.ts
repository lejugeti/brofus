import { Component, OnInit, Input } from '@angular/core';
import { DofapiItem, Item } from '../../interfaces/item.interface';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})


export class EquipementComponent implements OnInit {

  @Input() item: Item;
  itemId: number;
  faHeart = faHeart;
  imgUrl: string;

  constructor() { 
    this.item = { 
      id: 0,
      ankamaId: 0,
      name: '', 
      level: 0, 
      type: '',
      imgUrl: '',
      statistics: [],
    };

    this.itemId = this.item.id;
    this.imgUrl = '';
  }
  
  ngOnInit(): void {
    // console.log(this.item);

  }

}
