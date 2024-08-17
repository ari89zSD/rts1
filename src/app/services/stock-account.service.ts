import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StockAccountService {
  private stockServiceUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  createStockAccount(stockAccount: StockAccount) {
    this.http
      .post<StockAccount>(this.stockServiceUrl + '/stockaccount', stockAccount)
      .pipe(tap((res) => console.log(res)));
  }

  updateStockAccount(stockAccount: StockAccount) {
    this.http
      .put<StockAccount>(this.stockServiceUrl + '/stockaccount', stockAccount)
      .pipe(tap((res) => console.log(res)));
  }

  getStockAccountById(accountId: number): Observable<StockAccount> {
    return this.http
      .get<StockAccount>(this.stockServiceUrl + '/stockaccount/' + accountId)
      .pipe(tap((res) => console.log(res)));
  }
}

export interface StockAccount {
  accountId: number;
  stockId: number;
  symbol: string;
  quantity: number;
}
