import { Component, AfterViewChecked, ViewChild } from '@angular/core';

import cthulhuV7frClassique from '../assets/cthulhu-v7-fr-classique/config.json';

type Percent = number;

interface SheetDataPosition {
  key: string;
  x: number;
  y: number;
  width: Percent;
  value: string | number;
  fontSize?: Percent;
}

interface SheetData {
  content: {
    page1: SheetDataPosition[],
    page2: SheetDataPosition[],
  };
  pageConfig: {
    pageFormat: 'A4';// ! TODO fix ratio bug (ratio is not respected if this value is under 100)
    pageWidth: Percent;
    pages: string[];
  };
}

const LOCAL_STORAGE_SHEET_DATA_KEY = "VirtualRgpCharacterSheet.SheetData.";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  @ViewChild('pages', { static: true }) pagesWrapperElement: any;

  sheetData: SheetData = cthulhuV7frClassique as SheetData;
  game = 'cthulhu-v7-fr-classique';

  constructor() {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_SHEET_DATA_KEY}${this.game}`);
    if(saved !== undefined && saved !== null) {
      this.sheetData = JSON.parse(saved);
    }
  }

  ngAfterViewChecked() {
    if(this.pagesWrapperElement !== undefined && this.pagesWrapperElement.nativeElement !== undefined) {
      this.pagesWrapperElement.nativeElement.style.setProperty('--pageWidth', `${ this.sheetData.pageConfig.pageWidth / 2 }%`);
    }
  }

  save() {
    localStorage.setItem(`${LOCAL_STORAGE_SHEET_DATA_KEY}${this.game}`, JSON.stringify(this.sheetData));
  }
}
