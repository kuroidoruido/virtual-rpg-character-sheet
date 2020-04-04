import { Injectable } from '@angular/core';
import { SheetData } from 'src/app/model/sheet.model';

const LOCAL_STORAGE_SHEET_DATA_KEY = "VirtualRgpCharacterSheet.SheetData.";

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor() { }

  save(game: string, sheetData: SheetData) {
    localStorage.setItem(`${LOCAL_STORAGE_SHEET_DATA_KEY}${game}`, JSON.stringify(sheetData));
  }

  restore(game: string): SheetData | undefined {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_SHEET_DATA_KEY}${game}`);
    if(saved !== undefined && saved !== null) {
      return JSON.parse(saved);
    }
    return undefined;
  }
}
