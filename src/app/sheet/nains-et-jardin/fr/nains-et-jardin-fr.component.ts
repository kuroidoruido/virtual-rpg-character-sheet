import { Component } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { OnePageSheetConfig } from 'src/app/model/sheet-config.model';
import { SheetStateService } from 'src/app/shared/sheet-state/sheet-state.service';

import { config } from './config';

@Component({
  selector: 'app-nains-et-jardin-fr',
  templateUrl: './nains-et-jardin-fr.component.html',
  styleUrls: ['./nains-et-jardin-fr.component.scss']
})
export class NainsEtJardinFrComponent {
  sheetConfig: OnePageSheetConfig = config;
  characterData: CharacterData;
  
  constructor(sheetStateService: SheetStateService) {
    this.characterData = sheetStateService.init(this.sheetConfig);
  }
}
