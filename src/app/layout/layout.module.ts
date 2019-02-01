import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderWithSidenavComponent } from './header-with-sidenav/header-with-sidenav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HeaderWithSidenavComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  exports: [HeaderWithSidenavComponent],
})
export class LayoutModule {}
