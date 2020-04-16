import { Injectable } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { Observable, ReplaySubject, Subject } from 'rxjs';

const LOCAL_STORAGE_SHEET_DATA_KEY = "VirtualRgpCharacterSheet.CharacterData.";
const LOCAL_STORAGE_NOTE_DATA_KEY = "VirtualRgpCharacterSheet.notes.";

type SaveState = 'idle' | 'saving' | 'saved';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  private saveState$: Subject<SaveState> = new ReplaySubject<SaveState>(1);

  constructor() {
    this.saveState$.next('idle');
  }

  saveState(): Observable<SaveState> {
    return this.saveState$.asObservable();
  }

  save(game: string, characterData: CharacterData) {
    this.saveState$.next('saving');
    localStorage.setItem(`${LOCAL_STORAGE_SHEET_DATA_KEY}${game}`, JSON.stringify(characterData));
    this.saveState$.next('saved');
    // setTimeout is for let user see saved info
    setTimeout(() => this.saveState$.next('idle'), 2000);
  }

  restore(game: string): CharacterData | undefined {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_SHEET_DATA_KEY}${game}`);
    if(saved !== undefined && saved !== null) {
      return JSON.parse(saved);
    }
    return undefined;
  }

  saveNotes(game: string, notes: string) {
    this.saveState$.next('saving');
    localStorage.setItem(`${LOCAL_STORAGE_NOTE_DATA_KEY}${game}`, JSON.stringify(notes.split('\n')));
    this.saveState$.next('saved');
    // setTimeout is for let user see saved info
    setTimeout(() => this.saveState$.next('idle'), 2000);
  }

  restoreNotes(game: string): string | undefined {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_NOTE_DATA_KEY}${game}`);
    if(saved !== undefined && saved !== null) {
      return JSON.parse(saved).join('\n');
    }
    return undefined;
  }
}