import { Injectable } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { Observable, ReplaySubject, Subject } from 'rxjs';

const LOCAL_STORAGE_KEY_FRAGMENT_SEPARATOR = '.';
const LOCAL_STORAGE_BASE_KEY = 'VirtualRpgCharacterSheet';
const LOCAL_STORAGE_SHEET_DATA_KEY = 'characterData';
const LOCAL_STORAGE_NOTE_DATA_KEY = 'notes';

type SaveState = 'idle' | 'saving' | 'saved';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  private saveState$: Subject<SaveState> = new ReplaySubject<SaveState>(1);

  constructor() {
    this.saveState$.next('idle');
  }

  private getStorageKey(gameSheetId: string, typeKey: string): string {
    return LOCAL_STORAGE_BASE_KEY 
      + LOCAL_STORAGE_KEY_FRAGMENT_SEPARATOR + gameSheetId 
      + LOCAL_STORAGE_KEY_FRAGMENT_SEPARATOR +  typeKey;
  }

  saveState(): Observable<SaveState> {
    return this.saveState$.asObservable();
  }

  save(gameSheetId: string, characterData: CharacterData) {
    this.saveState$.next('saving');
    localStorage.setItem(this.getStorageKey(gameSheetId, LOCAL_STORAGE_SHEET_DATA_KEY), JSON.stringify(characterData));
    this.saveState$.next('saved');
    // setTimeout is for let user see saved info
    setTimeout(() => this.saveState$.next('idle'), 2000);
  }

  restore(gameSheetId: string): CharacterData | undefined {
    const saved = localStorage.getItem(this.getStorageKey(gameSheetId, LOCAL_STORAGE_SHEET_DATA_KEY));
    if(saved !== undefined && saved !== null) {
      return JSON.parse(saved);
    }
    return undefined;
  }

  saveNotes(gameSheetId: string, notes: string) {
    this.saveState$.next('saving');
    localStorage.setItem(this.getStorageKey(gameSheetId, LOCAL_STORAGE_NOTE_DATA_KEY), JSON.stringify(notes.split('\n')));
    this.saveState$.next('saved');
    // setTimeout is for let user see saved info
    setTimeout(() => this.saveState$.next('idle'), 2000);
  }

  restoreNotes(gameSheetId: string): string | undefined {
    const saved = localStorage.getItem(this.getStorageKey(gameSheetId, LOCAL_STORAGE_NOTE_DATA_KEY));
    if(saved !== undefined && saved !== null) {
      return JSON.parse(saved).join('\n');
    }
    return undefined;
  }
}
