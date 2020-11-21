import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotkeysManagerModule } from './shared/hotkeys-manager/hotkeys-manager.module';
import { StaticTranslationLoaderFactory } from './translation-loader/static-translation-loader.service';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    TranslateModule.forRoot({
      extend: true,
      defaultLanguage: 'en',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: StaticTranslationLoaderFactory,
      }
    }),

    BrowserModule,
    BrowserAnimationsModule,
    
    HotkeysManagerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
