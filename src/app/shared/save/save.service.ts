import { Injectable } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { Observable, ReplaySubject, Subject } from 'rxjs';

export const LOCAL_STORAGE_KEY_FRAGMENT_SEPARATOR = '.';
export const LOCAL_STORAGE_BASE_KEY = 'VirtualRpgCharacterSheet';
export const LOCAL_STORAGE_SHEET_DATA_KEY = 'characterData';
export const LOCAL_STORAGE_NOTE_DATA_KEY = 'notes';
export const LOCAL_STORAGE_DICE_ROLLER_DATA_KEY = 'diceRoller';

type SaveState = 'idle' | 'saving' | 'saved';

type DiceCount = number;
type FaceCount = number;

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  private saveState$: Subject<SaveState> = new ReplaySubject<SaveState>(1);

  constructor() {
    this.saveState$.next('idle');
  }

  private getGameStorageKey(gameSheetId: string, typeKey: string): string {
    return LOCAL_STORAGE_BASE_KEY 
      + LOCAL_STORAGE_KEY_FRAGMENT_SEPARATOR + gameSheetId 
      + LOCAL_STORAGE_KEY_FRAGMENT_SEPARATOR +  typeKey;
  }

  private getStorageKey(typeKey: string): string {
    return LOCAL_STORAGE_BASE_KEY 
      + LOCAL_STORAGE_KEY_FRAGMENT_SEPARATOR +  typeKey;
  }

  saveState(): Observable<SaveState> {
    return this.saveState$.asObservable();
  }

  save(gameSheetId: string, characterData: CharacterData) {
    this.saveState$.next('saving');
    localStorage.setItem(this.getGameStorageKey(gameSheetId, LOCAL_STORAGE_SHEET_DATA_KEY), JSON.stringify(characterData));
    this.saveState$.next('saved');
    // setTimeout is for let user see saved info
    setTimeout(() => this.saveState$.next('idle'), 2000);
  }

  restore(gameSheetId: string): CharacterData | undefined {
    const saved = localStorage.getItem(this.getGameStorageKey(gameSheetId, LOCAL_STORAGE_SHEET_DATA_KEY));
    if(saved !== undefined && saved !== null) {
      return JSON.parse(saved);
    }
    return undefined;
  }

  saveNotes(gameSheetId: string, notes: string) {
    this.saveState$.next('saving');
    localStorage.setItem(this.getGameStorageKey(gameSheetId, LOCAL_STORAGE_NOTE_DATA_KEY), JSON.stringify(notes.split('\n')));
    this.saveState$.next('saved');
    // setTimeout is for let user see saved info
    setTimeout(() => this.saveState$.next('idle'), 2000);
  }

  restoreNotes(gameSheetId: string): string | undefined {
    const saved = localStorage.getItem(this.getGameStorageKey(gameSheetId, LOCAL_STORAGE_NOTE_DATA_KEY));
    if(saved !== undefined && saved !== null) {
      return JSON.parse(saved).join('\n');
    }
    return undefined;
  }

  saveDiceRoller(diceCount: DiceCount, faceCount: FaceCount) {
    localStorage.setItem(this.getStorageKey(LOCAL_STORAGE_DICE_ROLLER_DATA_KEY), JSON.stringify([diceCount, faceCount]));
  }

  restoreDiceRoller(): [DiceCount, FaceCount] | undefined {
    const saved = localStorage.getItem(this.getStorageKey(LOCAL_STORAGE_DICE_ROLLER_DATA_KEY));
    if(saved !== undefined && saved !== null) {
      const array = JSON.parse(saved);
      if(array !== undefined && array.length === 2) {
        return [ parseInt(array[0]), parseInt(array[1]) ];
      }
    }
    return undefined;
  }
}
