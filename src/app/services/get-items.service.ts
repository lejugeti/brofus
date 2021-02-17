import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {
  
  equipmentsUrl = 'https://fr.dofus.dofapi.fr/equipments/';
  weaponsUrl = 'https://fr.dofus.dofapi.fr/weapons/';
  items: Array<any>;

  constructor(private http: HttpClient) {
    this.items = [];
   }

  getEquipments() {
    return this.http.get(this.equipmentsUrl);
  }

  getWeapons() {
    return this.http.get(this.weaponsUrl);
  }

  getSingleEquipment(id: number) {
    return this.http.get<any>(this.equipmentsUrl + id);
  }
}
