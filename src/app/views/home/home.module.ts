import { FormsModule } from '@angular/forms';
import { MatListModule, MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { LayoutModule } from '~layout/layout.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AdminEmailValidatorDirective } from './directives/admin-email-validator.directive';

@NgModule({
  declarations: [HomeLandingPageComponent, RegisterFormComponent, AdminEmailValidatorDirective],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class HomeModule {}
