import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StockDataService {
  private stockServiceUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  stocks: Stock[];

  public stocksSubject = new BehaviorSubject<Stock[]>([]);
  public stocks$: Observable<Stock[]> = this.stocksSubject.asObservable();

  getStocks() {
    this.http
      .get<Stock[]>(this.stockServiceUrl + 'stocks')
      .pipe(
        map((stocks) => {
          return stocks.map((stock) => {
            return { ...stock } as Stock;
          });
        })
      )
      .subscribe((stocks) => {
        this.stocks = stocks;
        this.stocksSubject.next(this.stocks); // Notify subscribers when stocks are fetched
      });
  }

  getStockById(id: number): Observable<Stock> {
    return this.http.get<Stock>(this.stockServiceUrl + 'stocks/' + id).pipe(
      take(1),
      tap((value) => console.log('got stock ' + value.symbol + ' by ID ' + id))
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
  id: number;
  symbol: string;
  price: number;
  bid: number;
  ask: number;
  volume: number;
}
