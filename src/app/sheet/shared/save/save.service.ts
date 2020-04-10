import { Injectable } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';

const LOCAL_STORAGE_SHEET_DATA_KEY = "VirtualRgpCharacterSheet.CharacterData.";

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor() { }

  save(game: string, characterData: CharacterData) {
    localStorage.setItem(`${LOCAL_STORAGE_SHEET_DATA_KEY}${game}`, JSON.stringify(characterData));
  }

  restore(game: string): CharacterData | undefined {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_SHEET_DATA_KEY}${game}`);
    if(saved !== undefined && saved !== null) {
      return JSON.parse(saved);
    }
    return undefined;
  }
}
