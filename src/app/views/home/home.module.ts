import { MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { LayoutModule } from '~layout/layout.module';

@NgModule({
  declarations: [HomeLandingPageComponent],
  imports: [CommonModule, HomeRoutingModule, LayoutModule, MatListModule],
})
export class HomeModule {}
