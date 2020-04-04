import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CthulhuV7FrClassiqueComponent } from './sheet/cthulhu-v7-fr-classique/cthulhu-v7-fr-classique.component';
import { TwoPagesComponent } from './template/two-pages/two-pages.component';



@NgModule({
  declarations: [
    AppComponent,
    CthulhuV7FrClassiqueComponent,
    TwoPagesComponent
  ],
  imports: [
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
