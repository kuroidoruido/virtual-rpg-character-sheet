import { Component } from '@angular/core';
import { SaveService } from 'src/app/shared/save/save.service';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss'],
})
export class DiceRollerComponent {
  diceCount = 1;
  faceCount = 6;
  rolled = false;

  dices: number[] = [];
  result = 0;

  constructor(private save: SaveService) {
    const diceRollerState = save.restoreDiceRoller();
    if (diceRollerState !== undefined) {
      this.diceCount = diceRollerState[0];
      this.faceCount = diceRollerState[1];
    }
  }
  setDiceCount(value: string): void {
    this.diceCount = parseInt(value, 10);
  }
  setFaceCount(value: string): void {
    this.faceCount = parseInt(value, 10);
  }
  roll(event: any) {
    event.preventDefault();
    let result = 0;
    const dices = [];
    for (let i = 0; i < this.diceCount; i++) {
      const dice = Math.ceil(Math.random() * this.faceCount);
      dices.push(dice);
      result += dice;
    }
    this.dices = dices;
    this.result = result;
    this.rolled = true;
    this.save.saveDiceRoller(this.diceCount, this.faceCount);
  }
}
