import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '~layout/layout.module';
import { MatDividerModule, MatListModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

const Imports = [RouterModule, LayoutModule, MatDividerModule, MatListModule, MatIconModule, TranslateModule];
const Declarations = [ItemListComponent];
@NgModule({
  declarations: [...Declarations],
  imports: [
    CommonModule,
    ...Imports,
  ],
  exports: [...Declarations, ...Imports],
})
export class SafeModule {
  constructor(translateService: TranslateService) {
    translateService.setDefaultLang('de');
    translateService.use('de');
  }
}
