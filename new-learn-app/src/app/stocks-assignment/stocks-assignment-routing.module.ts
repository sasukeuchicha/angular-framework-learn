import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksHomePageComponent } from './stocks-home-page/stocks-home-page.component';

const routes: Routes = [{ path: '', component: StocksHomePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StocksAssignmentRoutingModule {}
