import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dice-roller-button',
  templateUrl: './dice-roller-button.component.html',
  styleUrls: ['./dice-roller-button.component.scss']
})
export class DiceRollerButtonComponent {
  @Output() toggleShowRoller = new EventEmitter<void>();
}
