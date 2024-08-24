import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Stock, StockDataService } from '../services/stock-data.service';

@Component({
  selector: 'stocks-table-card',
  templateUrl: './stocks-table-card.component.html',
  styleUrls: ['./stocks-table-card.component.scss'],
})
export class StocksTableCardComponent implements OnInit {
  constructor(private stockService: StockDataService) {}

  stocksDataSource = new MatTableDataSource<Stock>();

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
    this.refreshStocksData();

    this.interval = setInterval(() => {
      this.refreshStocksData();
    }, 5000);
  }

  private refreshStocksData() {
    this.stockService.getStocks().subscribe((data) => {
      this.stocksDataSource.data = data;
    });
  }
}
