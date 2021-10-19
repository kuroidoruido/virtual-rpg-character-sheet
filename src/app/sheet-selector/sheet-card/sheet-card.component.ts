import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SheetWithUserInfos, GameWithUserInfos, Character } from 'src/app/model/game.model';

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

  downloadVrpgJson() {
    const fileData = JSON.stringify(this.sheet.characters);
    const blob = new Blob([fileData], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const aElement = document.createElement('a');
    aElement.href = url;
    const date = formatDate(new Date(), 'y-MM-dd', 'en');
    aElement.download = `${date}-${this.sheet.sheetName}.vrpg.json`;
    aElement.click();
  }
}
