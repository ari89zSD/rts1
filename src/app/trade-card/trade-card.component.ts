import { Component, Input, OnInit } from '@angular/core';
import { Stock, StockDataService } from '../services/stock-data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'trade-card',
  templateUrl: './trade-card.component.html',
  styleUrls: ['./trade-card.component.scss'],
})
export class TradeCardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private stockService: StockDataService
  ) {}

  $stock: Observable<Stock>;

  ngOnInit(): void {
    this.$stock = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.stockService.getStockById(parseInt(params.get('id')))
      )
    );

    this.$stock.subscribe((value) =>
      console.log('Got stock by ID ' + value.symbol)
    );
  }
}
