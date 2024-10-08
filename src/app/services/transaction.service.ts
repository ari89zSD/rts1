import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private stockServiceUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  createTransaction(transaction: Transaction): Observable<Transaction> {
    console.log('calling transaction service!');
    return this.http
      .post<Transaction>(this.stockServiceUrl + 'transaction', transaction)
      .pipe(take(1));
  }

  getTransactionByAccountId(accountId: number): Observable<Transaction> {
    return this.http
      .get<Transaction>(this.stockServiceUrl + 'transaction/' + accountId)
      .pipe(tap((res) => console.log(res)));
  }

  getTransactionByAccountIdAndSymbol(
    accountId: number,
    symbol: string
  ): Observable<Transaction> {
    return this.http
      .get<Transaction>(
        this.stockServiceUrl + 'transaction/' + accountId + '/' + symbol
      )
      .pipe(tap((res) => console.log(res)));
  }
}

export interface Transaction {
  transactionId: number;
  accountId: number;
  symbol: string;
  quantity: number;
  price: number;
  creationDate: string;
}
