import { Component } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { TwoPageSheetConfig } from 'src/app/model/sheet-config.model';
import { SaveService } from 'src/app/sheet/shared/save/save.service';
import cthulhuV7frClassique from './config.json';

const GAME = 'cthulhu-v7-fr-classique';// ! TODO remove this when data values will be separated from config

@Component({
  selector: 'app-cthulhu-v7-fr-classique',
  templateUrl: './cthulhu-v7-fr-classique.component.html',
  styleUrls: ['./cthulhu-v7-fr-classique.component.scss']
})
export class CthulhuV7FrClassiqueComponent {

  sheetConfig: TwoPageSheetConfig = cthulhuV7frClassique as TwoPageSheetConfig;
  characterData: CharacterData = { values: {} };
  
  constructor(private saveService: SaveService) {
    const saved = saveService.restore(GAME);
    if(saved !== undefined) {
      this.characterData = saved as CharacterData;
    }
  }

  save() {
    this.saveService.save(GAME, this.characterData);
  }
}
