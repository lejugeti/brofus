import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DofapiItem, Item } from '../../interfaces/item.interface';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore } from '@angular/fire/firestore';

import { User } from '../../services/classes/user.class';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})


export class EquipementComponent implements OnInit {

  @Input() item: Item;
  @Input() isWished: boolean = false;
  @Output() wishChangeEvent = new EventEmitter<Object>();
  faHeart = faHeart;
  
  constructor(private afs: AngularFirestore) { 
    this.item = { 
      id: 0,
      ankamaId: 0,
      name: '', 
      level: 0, 
      type: '',
      imgUrl: '',
      statistics: [],
    };
    
  }
  
  ngOnInit(): void {
    // console.log(this.item);
  }

  handleWishChange() {
    this.isWished = !this.isWished;
    this.wishChangeEvent.emit({id: this.item.id, isWished: this.isWished});
    // console.log({id: this.item.id, isWished: this.isWished});
  }
  
}
