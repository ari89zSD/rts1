import { Component, OnInit } from '@angular/core';
import { combineLatest, merge, Observable } from 'rxjs';
import { StockDataService } from '../services/stock-data.service';

@Component({
  selector: 'portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
})
export class PortfolioCardComponent implements OnInit {
  constructor(private stockService: StockDataService) {}

  $total: Observable<number> | undefined;
  stockTotal: Observable<number> | undefined;
  bondTotal: Observable<number> | undefined;

  ngOnInit(): void {
    this.stockTotal = this.stockService.getStocksTotal();

    this.bondTotal = this.stockService.getBondsTotal();

    this.$total = combineLatest(
      this.stockTotal,
      this.bondTotal,
      (x, y) => x + y
    );
  }
}
