import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksTableCardComponent } from './stocks-table-card/stocks-table-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderCardComponent } from './header-card/header-card.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { TradeCardComponent } from './trade-card/trade-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksTableCardComponent,
    HeaderCardComponent,
    PortfolioCardComponent,
    TradeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
