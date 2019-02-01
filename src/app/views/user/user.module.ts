import { MatListModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { LayoutModule } from '~layout/layout.module';
import { SafeComponent } from './components/safe/safe.component';

@NgModule({
  declarations: [UserLandingPageComponent, SafeComponent],
  imports: [CommonModule, UserRoutingModule, LayoutModule, MatListModule, MatIconModule],
})
export class UserModule {}
