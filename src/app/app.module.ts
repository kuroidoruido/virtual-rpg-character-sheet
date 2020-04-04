import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CthulhuV7FrClassiqueModule } from './sheet/cthulhu-v7-fr-classique';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
    BrowserModule,
    BrowserAnimationsModule,
    
    CthulhuV7FrClassiqueModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
