import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StockDataService {
  private stockServiceUrl = 'http://localhost:8080/';

  //private stocksSubject: BehaviorSubject<Stock[]> = new BehaviorSubject([]);

  //stocks$: Observable<Stock[]> = this.stocksSubject.asObservable();

  // updateData(): Observable<Stock> {
  //   return this.getStocks().do((stock) => {
  //     this.stocksSubject.next(stock);
  //   });
  // }

  constructor(private http: HttpClient) {}

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.stockServiceUrl + 'stocks').pipe(
      map((stocks) => {
        return stocks.map((stock) => {
          return { ...stock } as Stock;
        });
      })
    );
  }

  getStocksTotal(): Observable<number> {
    return this.http
      .get<number>(this.stockServiceUrl + 'mystocks')
      .pipe(take(1));
  }

  getBondsTotal(): Observable<number> {
    return this.http
      .get<number>(this.stockServiceUrl + 'mybonds')
      .pipe(take(1));
  }
}

export interface Stock {
  symbol: string;
  price: number;
  bid: number;
  ask: number;
  volume: number;
}
