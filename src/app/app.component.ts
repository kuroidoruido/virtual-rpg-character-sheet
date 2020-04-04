import { Component, AfterViewChecked, ViewChild } from '@angular/core';

import cthulhuV7frClassique from '../assets/cthulhu-v7-fr-classique/config.json';
import { TwoSheetData } from './model/sheet.model';
import { SaveService } from './shared/save/save.service.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  @ViewChild('pages', { static: true }) pagesWrapperElement: any;

  sheetData: TwoSheetData = cthulhuV7frClassique as TwoSheetData;
  game = 'cthulhu-v7-fr-classique';

  constructor(private saveService: SaveService) {
    const saved = saveService.restore(this.game);
    if(saved !== undefined && saved.content.pageCount === 2) {
      this.sheetData = saved as TwoSheetData;
    }
  }

  ngAfterViewChecked() {
    if(this.pagesWrapperElement !== undefined && this.pagesWrapperElement.nativeElement !== undefined) {
      this.pagesWrapperElement.nativeElement.style.setProperty('--pageWidth', `${ this.sheetData.pageConfig.pageWidth / 2 }%`);
    }
  }

  save() {
    this.saveService.save(this.game, this.sheetData);
  }
}
