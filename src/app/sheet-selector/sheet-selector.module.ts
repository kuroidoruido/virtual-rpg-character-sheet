import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'; 
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SheetSelectorPageComponent } from './sheet-selector-page/sheet-selector-page.component';
import { SheetCardComponent } from './sheet-card/sheet-card.component';
import { GameSectionComponent } from './game-section/game-section.component';



@NgModule({
  declarations: [SheetSelectorPageComponent, SheetCardComponent, GameSectionComponent],
  imports: [
    CommonModule,

    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  exports: [ SheetSelectorPageComponent ],
})
export class SheetSelectorModule { }
