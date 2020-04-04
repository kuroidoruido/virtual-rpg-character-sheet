import { Component } from '@angular/core';
import { TwoSheetData } from 'src/app/model/sheet.model';

import { SaveService } from 'src/app/shared/save/save.service.js';
import cthulhuV7frClassique from './config.json';


@Component({
  selector: 'app-cthulhu-v7-fr-classique',
  templateUrl: './cthulhu-v7-fr-classique.component.html',
  styleUrls: ['./cthulhu-v7-fr-classique.component.scss']
})
export class CthulhuV7FrClassiqueComponent {

  sheetData: TwoSheetData = cthulhuV7frClassique as TwoSheetData;
  game = 'cthulhu-v7-fr-classique';

  constructor(private saveService: SaveService) {
    const saved = saveService.restore(this.game);
    if(saved !== undefined && saved.content.pageCount === 2) {
      this.sheetData = saved as TwoSheetData;
    }
  }

  save() {
    this.saveService.save(this.game, this.sheetData);
  }

}
