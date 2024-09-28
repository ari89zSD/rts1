import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Stock, StockDataService } from '../services/stock-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'stocks-table-card',
  templateUrl: './stocks-table-card.component.html',
  styleUrls: ['./stocks-table-card.component.scss'],
})
export class StocksTableCardComponent implements OnInit, OnDestroy {
  constructor(private stockService: StockDataService) {}

  stocksDataSource: MatTableDataSource<Stock>;
  private stocksSubscription: Subscription;

  interval: any;

  displayedColumns: string[] = [
    'symbol',
    'price',
    'bid',
    'ask',
    'volume',
    'action',
  ];

  ngOnInit(): void {
    this.stockService.getStocks(); // Load initial stock data

    // Subscribe to the stocks$ observable to update the table data
    this.stocksSubscription = this.stockService.stocks$.subscribe((stocks) => {
      this.stocksDataSource = new MatTableDataSource(stocks);
    });
  }

  ngOnDestroy(): void {
    // Cleanup the subscription to avoid memory leaks
    if (this.stocksSubscription) {
      this.stocksSubscription.unsubscribe();
    }
  }
}
