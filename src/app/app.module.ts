import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HotkeysManagerModule } from './shared/hotkeys-manager/hotkeys-manager.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
    BrowserModule,
    BrowserAnimationsModule,
    
    HotkeysManagerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
