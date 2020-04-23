import { Component } from '@angular/core';
import { produce } from 'immer';

import { GameSheetService } from '../game-sheet-service/game-sheet.service';
import { GameWithUserInfos } from '../game.model';

const TAB_OWN_GAME_SHEET = 0;
const TAB_ALL_SHEETS = 1;
const DEFAULT_TAB = TAB_OWN_GAME_SHEET;

@Component({
  selector: 'app-sheet-selector-page',
  templateUrl: './sheet-selector-page.component.html',
  styleUrls: ['./sheet-selector-page.component.scss']
})
export class SheetSelectorPageComponent {
  selectedTab = DEFAULT_TAB;
  games: GameWithUserInfos[];
  gamesSheetCount = 0;
  ownGamesSheet: GameWithUserInfos[];
  OwnGamesSheetCount = 0;

  constructor(gameSheetService: GameSheetService) {
    this.games = gameSheetService.getGames();
    this.gamesSheetCount = this.games.reduce((count, game) => count + game.sheets.length, 0);
    this.ownGamesSheet = this.games
        .filter(game => game.sheets.some(sheet => sheet.characters.length > 0))
        .map(game => produce(game, draft => {
          draft.sheets = draft.sheets.filter(sheet => sheet.characters.length > 0);
        }));
    this.OwnGamesSheetCount = this.ownGamesSheet.reduce((count, game) => count + game.sheets.length, 0);
    if(this.ownGamesSheet === undefined || this.ownGamesSheet.length === 0) {
      this.selectedTab = TAB_ALL_SHEETS;
    }
  }
}
