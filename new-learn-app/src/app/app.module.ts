import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { D2Component } from './d2/d2.component';
import { EncapsulationExampleComponent } from './encapsulation-example/encapsulation-example.component';
import { EncapsulationExample2Component } from './encapsulation-example2/encapsulation-example2.component';
import { EncapsulationExample3Component } from './encapsulation-example3/encapsulation-example3.component';
import { RoutingExample1Component } from './routing-example1/routing-example1.component';
import { RoutingExample2Component } from './routing-example2/routing-example2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BindingAssessmentComponent } from './binding-assessment/binding-assessment.component';
import { ParentExample1Component } from './parent-example1/parent-example1.component';
import { ChildExample1Component } from './child-example1/child-example1.component';
import { StocksAssignmentModule } from './stocks-assignment/stocks-assignment.module';

@NgModule({
  declarations: [
    AppComponent,
    D2Component,
    EncapsulationExampleComponent,
    EncapsulationExample2Component,
    EncapsulationExample3Component,
    RoutingExample1Component,
    RoutingExample2Component,
    PageNotFoundComponent,
    HomeComponent,
    BindingAssessmentComponent,
    ParentExample1Component,
    ChildExample1Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
