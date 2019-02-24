import { MatListModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';
import { LayoutModule } from '~layout/layout.module';
import { SafeListComponent } from './container/safe-list/safe-list.component';
import { SafeListElementComponent } from './container/safe-list-element/safe-list-element.component';
import { SafeRowComponent } from './components/safe-row/safe-row.component';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/admin/', '.json');
}

@NgModule({
  declarations: [AdminLandingPageComponent, SafeListComponent, SafeListElementComponent, SafeRowComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: true,
    }),
    LayoutModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [],
})
export class AdminModule {
  constructor(translateService: TranslateService) {
    translateService.setDefaultLang('de');
    translateService.use('de');
  }
}
