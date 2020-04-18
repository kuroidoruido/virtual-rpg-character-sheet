import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheetWrapperComponent } from './sheet-wrapper.component';
import { NoteZoneModule } from 'src/app/note-zone/note-zone.module';
import { SaveButtonModule } from 'src/app/shared/save-button/save-button.module';
import { SheetConfigPanelModule } from 'src/app/sheet-config-panel/sheet-config-panel.module';

@NgModule({
  declarations: [ SheetWrapperComponent ],
  imports: [ CommonModule, SaveButtonModule, NoteZoneModule, SheetConfigPanelModule, DragDropModule ],
  exports: [ SheetWrapperComponent ],
})
export class SheetWrapperModule { }
