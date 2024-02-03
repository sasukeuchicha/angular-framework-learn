import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksAssignmentRoutingModule } from './stocks-assignment-routing.module';
import { IrctcStockComponent } from './irctc-stock/irctc-stock.component';
import { NestleStockComponent } from './nestle-stock/nestle-stock.component';
import { HoldingsComponent } from './holdings/holdings.component';
import { StocksHomePageComponent } from './stocks-home-page/stocks-home-page.component';
import { AllStocksComponent } from './all-stocks/all-stocks.component';
import { AllGroupComponent } from './all-group/all-group.component';
import { FormsModule } from '@angular/forms';
import { TotalComponentComponent } from './total-component/total-component.component';

@NgModule({
  declarations: [
    IrctcStockComponent,
    NestleStockComponent,
    HoldingsComponent,
    StocksHomePageComponent,
    AllStocksComponent,
    AllGroupComponent,
    TotalComponentComponent,
  ],
  imports: [CommonModule, FormsModule, StocksAssignmentRoutingModule],
})
export class StocksAssignmentModule {}
