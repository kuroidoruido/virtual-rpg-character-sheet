import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SheetConfigPanelComponent } from './sheet-config-panel/sheet-config-panel.component';
import { SheetConfigToggleButtonComponent } from './sheet-config-toggle-button/sheet-config-toggle-button.component';

@NgModule({
  declarations: [SheetConfigPanelComponent, SheetConfigToggleButtonComponent],
  imports: [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  exports: [SheetConfigPanelComponent, SheetConfigToggleButtonComponent],
})
export class SheetConfigPanelModule { }
