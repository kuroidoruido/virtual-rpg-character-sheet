import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { NoteZoneModule } from 'src/app/note-zone/note-zone.module';
import { SheetConfigPanelModule } from 'src/app/sheet-config-panel/sheet-config-panel.module';
import { SaveButtonComponent } from './save-button/save-button.component';
import { SheetWrapperComponent } from './sheet-wrapper/sheet-wrapper.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { DiceRollerModule } from 'src/app/dice-roller/dice-roller.module';

@NgModule({
  declarations: [ SheetWrapperComponent, SaveButtonComponent, HomeButtonComponent ],
  imports: [
    CommonModule,
    DragDropModule,
    TranslateModule.forChild(),

    MatIconModule,
    MatButtonModule,
    
    NoteZoneModule,
    SheetConfigPanelModule,
    DiceRollerModule,
  ],
  exports: [ SheetWrapperComponent ],
})
export class SheetWrapperModule { }
