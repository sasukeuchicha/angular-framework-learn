import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingExample1Component } from './routing-example1/routing-example1.component';
import { RoutingExample2Component } from './routing-example2/routing-example2.component';
import { RoutingStandaloneExample1Component } from './routing-standalone-example1/routing-standalone-example1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { StocksHomePageComponent } from './stocks-assignment/stocks-home-page/stocks-home-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'stocks',
    component: StocksHomePageComponent,
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms-example/forms-example.module').then(
        (module) => module.FormsExampleModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./login-assignment/login-assignment.module').then(
        (module) => module.LoginAssignmentModule
      ),
  },
  { path: 'routing-component1', component: RoutingExample1Component },
  { path: 'routing-component2', component: RoutingExample2Component },
  {
    path: 'standalone-routing-component1',
    component: RoutingStandaloneExample1Component,
  },
  {
    path: 'standalone-routing-component2',
    loadComponent: () =>
      import(
        './routing-standalone-example2/routing-standalone-example2.component'
      ).then((component) => component.RoutingStandaloneExample2Component),
  },
  {
    path: 'feature',
    loadChildren: () =>
      import('./module-example/module-example.module').then(
        (m) => m.ModuleExampleModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
