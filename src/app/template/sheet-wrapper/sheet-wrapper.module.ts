import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { NoteZoneModule } from 'src/app/note-zone/note-zone.module';
import { SheetConfigPanelModule } from 'src/app/sheet-config-panel/sheet-config-panel.module';
import { SaveButtonComponent } from './save-button/save-button.component';
import { SheetWrapperComponent } from './sheet-wrapper/sheet-wrapper.component';

@NgModule({
  declarations: [ SheetWrapperComponent, SaveButtonComponent ],
  imports: [
    CommonModule, 
    MatIconModule,
    MatButtonModule,
    NoteZoneModule,
    SheetConfigPanelModule,
    DragDropModule,
  ],
  exports: [ SheetWrapperComponent ],
})
export class SheetWrapperModule { }
