import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAssignmentRoutingModule } from './login-assignment-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent, HomePageComponent],
  imports: [CommonModule, ReactiveFormsModule, LoginAssignmentRoutingModule],
})
export class LoginAssignmentModule {}
