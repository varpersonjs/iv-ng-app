import { Observable } from 'rxjs';
import { ApiService, Instrument, Price } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private apiService: ApiService) {}

  public getAllPrices(): Observable<Price[]> {
    return this.apiService.getAllPrices();
  }

  public getLatestPrice(instrument: Instrument): Observable<Price> {
    return this.apiService.getLatestPrice(instrument);
  }
}
