import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';

import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { DiceRollerButtonComponent } from './dice-roller-button/dice-roller-button.component';
import { DiceRollerContainerComponent } from './dice-roller-container/dice-roller-container.component';

@NgModule({
  declarations: [ DiceRollerButtonComponent, DiceRollerComponent, DiceRollerContainerComponent ],
  imports: [ CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule ],
  exports: [ DiceRollerContainerComponent ],
})
export class DiceRollerModule { }
