import { Component } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { TwoPageSheetConfig } from 'src/app/model/sheet-config.model';
import { SheetStateService } from 'src/app/shared/sheet-state/sheet-state.service';
import { config } from './config';

@Component({
  selector: 'app-cthulhu-v7-fr-classique',
  templateUrl: './cthulhu-v7-fr-classique.component.html',
  styleUrls: ['./cthulhu-v7-fr-classique.component.scss']
})
export class CthulhuV7FrClassiqueComponent {

  sheetConfig: TwoPageSheetConfig = config;
  characterData: CharacterData;
  
  constructor(sheetStateService: SheetStateService) {
    this.characterData = sheetStateService.init(this.sheetConfig);
  }
}