import { Component, OnInit, Input } from '@angular/core';
import { DofapiItem } from '../../interfaces/item.interface';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})


export class EquipementComponent implements OnInit {

  @Input() item: DofapiItem;
  itemId: number;
  faHeart = faHeart;
  imgUrl: string;

  constructor() { 
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
      setId:0
    };

    this.itemId = this.item._id;
    this.imgUrl = '';
  }
  
  ngOnInit(): void {
    // console.log(this.item);

  }

}
