import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksTableCardComponent } from './stocks-table-card/stocks-table-card.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';

const routes: Routes = [
  { path: 'stocks-table', component: StocksTableCardComponent },
  { path: 'portfolio', component: PortfolioCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
