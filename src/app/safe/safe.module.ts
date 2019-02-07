import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePageComponent } from './containers/safe-page/safe-page.component';
import { LayoutModule } from '~layout/layout.module';
import { MatDividerModule, MatListModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';

const Imports = [RouterModule, LayoutModule, MatDividerModule, MatListModule, MatIconModule];
@NgModule({
  declarations: [SafePageComponent, ItemListComponent],
  imports: [CommonModule, ...Imports],
  exports: [SafePageComponent, ...Imports],
})
export class SafeModule {}
