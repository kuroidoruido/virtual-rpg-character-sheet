import { Injectable } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { SheetConfig } from 'src/app/model/sheet-config.model';
import { SaveService } from 'src/app/shared/save/save.service';
import { ShareLinkService } from 'src/app/shared/share-link/share-link.service';

@Injectable({
  providedIn: 'root'
})
export class SheetStateService {

  currentGame: string | undefined;
  currentSheetConfig: SheetConfig | undefined;
  currentCharacterData: CharacterData | undefined;

  constructor(private saveService: SaveService, private shareLinkService: ShareLinkService) { }

  init(game: string, sheetConfig: SheetConfig): CharacterData {
    this.currentGame = game;
    this.currentSheetConfig = sheetConfig;
    this.currentCharacterData = { values: {} };

    const saved = this.saveService.restore(this.currentGame);
    if(saved !== undefined) {
      this.currentCharacterData = saved as CharacterData;
    }

    return this.currentCharacterData;
  }
  
}
