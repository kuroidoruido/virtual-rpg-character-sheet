import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SaveButtonComponent } from './save-button.component';

@NgModule({
  declarations: [ SaveButtonComponent ],
  imports: [
    CommonModule, 
    MatIconModule,
    MatButtonModule,
  ],
  exports: [ SaveButtonComponent ],
})
export class SaveButtonModule { }
