import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { RawSheetDataEditorPageComponent } from './raw-sheet-data-editor-page/raw-sheet-data-editor-page.component';
import { RawEditorSaveButtonComponent } from './raw-editor-save-button/raw-editor-save-button.component';

const routes: Routes = [{ path: ':gameSheetId', component: RawSheetDataEditorPageComponent }];

@NgModule({
  declarations: [RawSheetDataEditorPageComponent, RawEditorSaveButtonComponent],
  imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
  ]
})
export class RawSheetDataEditorModule { }
