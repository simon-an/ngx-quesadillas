import { MatListModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';
import { LayoutModule } from '~layout/layout.module';
import { SafeListComponent } from './container/safe-list/safe-list.component';
import { SafeListElementComponent } from './container/safe-list-element/safe-list-element.component';
import { SafeRowComponent } from './components/safe-row/safe-row.component';

@NgModule({
  declarations: [AdminLandingPageComponent, SafeListComponent, SafeListElementComponent, SafeRowComponent],
  imports: [CommonModule, AdminRoutingModule, LayoutModule, MatListModule, MatIconModule, MatTooltipModule],
  exports: [],
})
export class AdminModule {}
