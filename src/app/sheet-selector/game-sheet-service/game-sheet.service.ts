import { Injectable } from '@angular/core';
import { produce } from 'immer';

import { GAMES } from '../games';
import { GameWithUserInfos, SheetWithUserInfos } from '../game.model';
import { LOCAL_STORAGE_SHEET_DATA_KEY, SaveService, LOCAL_STORAGE_KEY_FRAGMENT_SEPARATOR } from 'src/app/shared/save/save.service';

interface UserSheetInfo {
  gameId: string;
  sheetId: string;
  characterName: string;
}

type UserSheetInfosMap = { [gameSheetId: string]: UserSheetInfo[] };

@Injectable({
  providedIn: 'root'
})
export class GameSheetService {

  private gameList = GAMES;

  constructor(private saveService: SaveService) { }

  getGames(): GameWithUserInfos[] {
    const userSheetInfos = this.getUserSheetInfos();
    const games: GameWithUserInfos[] = this.gameList.map(
      game => produce(game as GameWithUserInfos, draft => {
        draft.sheets = draft.sheets.map(sheet => produce(sheet as SheetWithUserInfos, sheetDraft => {
          sheetDraft.characters = [];
        }));
      })
    );

    for (const game of games) {
      for(const sheet of game.sheets) {
        if(userSheetInfos[game.gameId + LOCAL_STORAGE_KEY_FRAGMENT_SEPARATOR + sheet.sheetId] !== undefined) {
          for(const userSheetInfo of userSheetInfos[game.gameId + LOCAL_STORAGE_KEY_FRAGMENT_SEPARATOR + sheet.sheetId]) {
            sheet.characters.push({ name: userSheetInfo.characterName });
          }
        }
      }
    }

    return games;
  }

  getUserSheetInfos(storage = localStorage): UserSheetInfosMap {
    const userSheetInfos: UserSheetInfosMap = {};

    const keys: string[] = [];
    for (var i = 0, len = storage.length; i < len; ++i) {
      keys.push(storage.key(i));
    }

    const characterDataKeys = keys.filter(key => key.includes(LOCAL_STORAGE_SHEET_DATA_KEY));
    for (const key of characterDataKeys) {
      const [,gameId,sheetId] = key.split(LOCAL_STORAGE_KEY_FRAGMENT_SEPARATOR);
      const gameSheetId = gameId + LOCAL_STORAGE_KEY_FRAGMENT_SEPARATOR + sheetId;
      const sheetData = this.saveService.restore(gameSheetId);
      const characterName = sheetData.values.characterName || 'UNKNOWN';
      if(userSheetInfos[gameSheetId] === undefined) {
        userSheetInfos[gameSheetId] = [];
      }
      userSheetInfos[gameSheetId].push({ gameId, sheetId, characterName });
    }

    return userSheetInfos;
  }

}
