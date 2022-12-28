import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, interval, Observable } from 'rxjs';

export interface Price {
  id: string;
  instrumentName: string;
  bid: number;
  ask: number;
  timestamp: string;
}

export enum Instrument {
  EUR_USD = 'EUR/USD',
  GBP_USD = 'GBP/USD',
  EUR_JPY = 'EUR/JPY',
}

const generateData = (instrumentName: string): Price => {
  const calculatedBid = Math.floor(Math.random() * 100) / 100 + 1;
  const calculateId = `${instrumentName}-${new Date().getTime()}`;
  return {
    id: calculateId,
    instrumentName,
    bid: calculatedBid,
    ask: +(calculatedBid * 1.2).toFixed(2),
    timestamp: new Date().toISOString(),
  };
};
/**
 * ApiService in this case is pretending to be server. This logic here is just generate dump data
 */
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private database: Price[] = [];

  private eurUsd$: BehaviorSubject<Price> = new BehaviorSubject<Price>(
    generateData(Instrument.EUR_USD)
  );
  private gbpUsd$: BehaviorSubject<Price> = new BehaviorSubject<Price>(
    generateData(Instrument.GBP_USD)
  );
  private eurJpy$: BehaviorSubject<Price> = new BehaviorSubject<Price>(
    generateData(Instrument.EUR_JPY)
  );

  private eurUsdInterval$: Observable<number> = interval(3000);
  private gbpUsdInterval$: Observable<number> = interval(2200);
  private eurJpyInterval$: Observable<number> = interval(2000);
  private database$: BehaviorSubject<Price[]> = new BehaviorSubject<Price[]>(
    []
  );

  constructor() {
    this.setupMockServerResponse();
    this.feedMockDatabase();
  }

  public getAllPrices(): Observable<Price[]> {
    return this.database$.asObservable();
  }

  public getLatestPrice(instrument: Instrument) {
    return instrument === Instrument.EUR_JPY
      ? this.eurJpy$.asObservable()
      : instrument === Instrument.EUR_USD
      ? this.eurUsd$.asObservable()
      : this.gbpUsd$.asObservable();
  }

  private setupMockServerResponse(): void {
    this.eurUsdInterval$.subscribe({
      next: () => this.eurUsd$.next(generateData(Instrument.EUR_USD)),
    });
    this.gbpUsdInterval$.subscribe({
      next: () => this.gbpUsd$.next(generateData(Instrument.GBP_USD)),
    });
    this.eurJpyInterval$.subscribe({
      next: () => this.eurJpy$.next(generateData(Instrument.EUR_JPY)),
    });
  }

  private feedMockDatabase(): void {
    combineLatest([this.eurUsd$, this.gbpUsd$, this.eurJpy$]).subscribe(
      ([eurUsd, gbpUsd, eurJpy]) => {
        if (this.database.length >= 18) {
          [1, 2, 3].forEach(() => this.database.shift());
        }
        this.database.push(eurUsd, gbpUsd, eurJpy);
        this.database$.next(this.database);
      }
    );
  }
}
