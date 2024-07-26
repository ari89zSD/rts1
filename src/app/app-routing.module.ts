import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksTableCardComponent } from './stocks-table-card/stocks-table-card.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { TradeCardComponent } from './trade-card/trade-card.component';

const routes: Routes = [
  { path: 'stocks-table', component: StocksTableCardComponent },
  { path: 'portfolio', component: PortfolioCardComponent },
  { path: 'trade/:id', component: TradeCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
