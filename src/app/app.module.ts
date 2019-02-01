import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
