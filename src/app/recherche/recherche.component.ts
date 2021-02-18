import { Component, OnInit } from '@angular/core';
import { GetItemsService } from '../services/get-items.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  
  equipements: Array<any> = [];

  constructor(private itemsService: GetItemsService) {}

  ngOnInit(): void {
    this.itemsService.getSingleEquipment(14000).subscribe(data => {
      // console.log(data);
      this.equipements.push(data)
    });

    // this.itemsService.getEquipments().subscribe(data => {
    //   data.forEach(item => {
    //     this.equipements.push(item);
    //   });
    // });
  }
  
  
}

