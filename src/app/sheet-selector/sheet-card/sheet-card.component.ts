import { Component, Input } from '@angular/core';

import { SheetWithUserInfos, GameWithUserInfos, Character } from '../game.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sheet-card',
  templateUrl: './sheet-card.component.html',
  styleUrls: ['./sheet-card.component.scss']
})
export class SheetCardComponent {
  @Input() game: GameWithUserInfos | undefined;
  @Input() sheet: SheetWithUserInfos | undefined;

  constructor(private router: Router) {}

  openCharacterSheet(character: Character) {
    this.router.navigate([this.game.gameId + '.' + this.sheet.sheetId]);
    // TODO remove this when we will be able to have multiple characters
    console.log('character selected', character);
  }

  createCharacterSheet() {
    this.router.navigate([this.game.gameId + '.' + this.sheet.sheetId]);
  }
}
