import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsExampleRoutingModule } from './forms-example-routing.module';
import { FormsExample1Component } from './forms-example1/forms-example1.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormsExample1Component
  ],
  imports: [
    CommonModule,
    FormsExampleRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FormsExampleModule { }
