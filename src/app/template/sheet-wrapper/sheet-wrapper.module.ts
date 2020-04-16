import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheetWrapperComponent } from './sheet-wrapper.component';
import { SaveButtonModule } from 'src/app/shared/save-button/save-button.module';
import { NoteZoneModule } from 'src/app/note-zone/note-zone.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ SheetWrapperComponent ],
  imports: [ CommonModule, SaveButtonModule, NoteZoneModule, DragDropModule ],
  exports: [ SheetWrapperComponent ],
})
export class SheetWrapperModule { }
