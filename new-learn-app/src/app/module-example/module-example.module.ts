import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleComponent1Component } from './module-component1/module-component1.component';
import { ModuleComponent2Component } from './module-component2/module-component2.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutingStandaloneExample2Component } from '../routing-standalone-example2/routing-standalone-example2.component';

const featureRoutes: Routes = [
  { path: 'feature-component1', component: ModuleComponent1Component },
  { path: 'feature-component2', component: ModuleComponent2Component },
];

@NgModule({
  declarations: [ModuleComponent1Component, ModuleComponent2Component],
  imports: [CommonModule, RouterModule.forChild(featureRoutes), RoutingStandaloneExample2Component],
  exports: [RouterModule],
})
export class ModuleExampleModule {}
