import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsExample1Component } from './forms-example1/forms-example1.component';

const routes: Routes = [{ path: '', component: FormsExample1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsExampleRoutingModule {}
