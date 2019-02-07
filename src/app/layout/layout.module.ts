import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderWithSidenavComponent } from './header-with-sidenav/header-with-sidenav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

const Imports = [ MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule];

@NgModule({
  declarations: [HeaderWithSidenavComponent],
  imports: [CommonModule, ...Imports],
  exports: [HeaderWithSidenavComponent, ...Imports],
})
export class LayoutModule {}
