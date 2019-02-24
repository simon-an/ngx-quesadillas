import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { SafeInMemDataService } from './services/in-memory-safe.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { TimingInterceptor } from './interceptors/timing.interceptors';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(SafeInMemDataService, {
          delay: 500,
          dataEncapsulation: false,
          passThruUnknownUrl: true,
        }),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: SafeInMemDataService, useExisting: InMemoryDbService },
    { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
    {
      provide: LOCALE_ID,
      useValue: 'de-DE',
    },
  ],
})
export class CoreModule {
  constructor(translateService: TranslateService) {
    translateService.setDefaultLang('de');
    translateService.use('de');
  }
}
