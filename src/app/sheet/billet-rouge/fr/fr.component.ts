import { Component } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { TwoPageSheetConfig } from 'src/app/model/sheet-config.model';
import { SheetStateService } from 'src/app/shared/sheet-state/sheet-state.service';
import { config } from './config';

@Component({
  selector: 'app-fr',
  templateUrl: './fr.component.html',
  styleUrls: ['./fr.component.scss']
})
export class FrComponent {

  sheetConfig: TwoPageSheetConfig = config;
  characterData: CharacterData;
  
  constructor(sheetStateService: SheetStateService) {
    this.characterData = sheetStateService.init(this.sheetConfig);
  }
}
