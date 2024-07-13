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

  displayedColumns: string[] = [
    'symbol',
    'price',
    'bid',
    'ask',
    'volume',
    'action',
  ];

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((data) => {
      console.log('Received in service: ' + data);
      this.stocksDataSource.data = data;
    });
  }
}
