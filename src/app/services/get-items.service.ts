import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { DofapiItem } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {
  
  equipmentsUrl = 'https://fr.dofus.dofapi.fr/equipments/';
  weaponsUrl = 'https://fr.dofus.dofapi.fr/weapons/';

  constructor(private http: HttpClient) {}

  getEquipments() {
    return this.http.get<DofapiItem[]>(this.equipmentsUrl);
  }

  getSingleEquipment(id: number) {
    return this.http.get<DofapiItem>(this.equipmentsUrl + id);
  }
}
