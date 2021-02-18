import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetItemsService } from '../services/get-items.service';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-calculateur',
  templateUrl: './calculateur.component.html',
  styleUrls: ['./calculateur.component.scss']
})
export class CalculateurComponent implements OnInit {
  
  item: Item;

  constructor(private itemService: GetItemsService, private route: ActivatedRoute) {
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
   }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const itemId = Number(routeParams.get('itemId'));
    this.itemService.getSingleEquipment(itemId).subscribe(res => {
      console.log(res);
      this.item = res;
    });
  }

}
