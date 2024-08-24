import { Component, Input, OnInit } from '@angular/core';
import { Stock, StockDataService } from '../services/stock-data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  Transaction,
  TransactionService,
} from '../services/transaction.service';
import { StockAccountService } from '../services/stock-account.service';

@Component({
  selector: 'trade-card',
  templateUrl: './trade-card.component.html',
  styleUrls: ['./trade-card.component.scss'],
})
export class TradeCardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stockService: StockDataService,
    private transactionService: TransactionService
  ) {}

  $stock: Observable<Stock>;
  stock: Stock;

  ngOnInit(): void {
    this.$stock = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.stockService.getStockById(parseInt(params.get('id')))
      )
    );

    this.$stock.subscribe((stock) => {
      this.stock = stock;
    });
  }

  onClickSubmit(data) {
    let transaction: Transaction = {
      transactionId: null,
      accountId: null,
      symbol: data.symbol,
      quantity: data.quantity,
      price: data.price,
      creationDate: null,
    };
    this.transactionService
      .createTransaction(transaction)
      .subscribe((value) =>
        console.log(
          'got back transaction ' +
            value.symbol +
            ' by ID ' +
            value.transactionId
        )
      );
    this.router.navigate(['']);
  }
}
