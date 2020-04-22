import { Injectable } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { SheetConfig } from 'src/app/model/sheet-config.model';
import { SaveService } from 'src/app/shared/save/save.service';
import { ShareLinkService } from 'src/app/shared/share-link/share-link.service';

@Injectable({
  providedIn: 'root'
})
export class SheetStateService {

  currentGameSheetId: string | undefined;
  currentSheetConfig: SheetConfig | undefined;
  currentCharacterData: CharacterData | undefined;

  constructor(private saveService: SaveService, private shareLinkService: ShareLinkService) { }

  init(sheetConfig: SheetConfig): CharacterData {
    this.currentGameSheetId = sheetConfig.gameId + '.' + sheetConfig.sheetId;
    this.currentSheetConfig = sheetConfig;
    this.currentCharacterData = { values: { characterName: '' } };

    const saved = this.saveService.restore(this.currentGameSheetId);
    if(saved !== undefined) {
      this.currentCharacterData = saved as CharacterData;
    }

    const characterDecodedFromUrl = this.shareLinkService.decodeShareLink();
    if(characterDecodedFromUrl !== undefined) {
      this.currentCharacterData = characterDecodedFromUrl;
    }

    return this.currentCharacterData;
  }
  
}
