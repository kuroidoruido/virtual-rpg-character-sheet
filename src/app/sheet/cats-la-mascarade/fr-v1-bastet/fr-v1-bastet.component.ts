import { Component } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { TwoPageSheetConfig } from 'src/app/model/sheet-config.model';
import { SheetStateService } from 'src/app/shared/sheet-state/sheet-state.service';
import { config } from './config';

@Component({
  selector: 'app-fr-v1-bastet',
  templateUrl: './fr-v1-bastet.component.html',
  styleUrls: ['./fr-v1-bastet.component.scss']
})
export class FrV1BastetComponent {

  sheetConfig: TwoPageSheetConfig = config;
  characterData: CharacterData;
  
  constructor(sheetStateService: SheetStateService) {
    this.characterData = sheetStateService.init(this.sheetConfig);
  }
}
