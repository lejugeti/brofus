import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item.interface';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})


export class EquipementComponent implements OnInit {

  @Input() item: Item;
  faHeart = faHeart;

  constructor() { 
    this.item = { 
      nom: '', 
      level: 0, 
      typeEquipement: '',
      pathImg: '',
      dernierBrisage: '',
      coefficient: 0,
      rentabiliteKamas: 0,
      rentabiliteProportion:0
    };
  }
  
  ngOnInit(): void {
  }

}
