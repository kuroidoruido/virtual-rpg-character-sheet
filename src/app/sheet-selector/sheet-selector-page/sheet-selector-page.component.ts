import { Component } from '@angular/core';

import { GameSheetService } from '../game-sheet-service/game-sheet.service';
import { GameWithUserInfos } from '../game.model';

@Component({
  selector: 'app-sheet-selector-page',
  templateUrl: './sheet-selector-page.component.html',
  styleUrls: ['./sheet-selector-page.component.scss']
})
export class SheetSelectorPageComponent {
  games: GameWithUserInfos[];

  constructor(gameSheetService: GameSheetService) {
    this.games = gameSheetService.getGames();
  }
}
