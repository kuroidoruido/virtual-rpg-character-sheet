import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { produce } from 'immer';
import { Observable, combineLatest, ReplaySubject, Subject, Subscription, BehaviorSubject } from 'rxjs';
import { filter, map, tap, shareReplay, first, delay } from 'rxjs/operators';

import { SaveService } from 'src/app/shared/save/save.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CharacterData, CharacterDataValue } from 'src/app/model/character-data.model';

@Component({
  selector: 'app-raw-sheet-data-editor-page',
  templateUrl: './raw-sheet-data-editor-page.component.html',
  styleUrls: ['./raw-sheet-data-editor-page.component.scss'],
})
export class RawSheetDataEditorPageComponent implements OnDestroy {
  displayedColumns: string[] = ['key', 'value', 'delete'];
  form = new FormGroup({});
  keys$: Observable<string[]>;
  filteredKeys$: Observable<string[]>;
  keysFilter$ = new BehaviorSubject<string>('');
    
  private gameSheetId$: Observable<string>;
  private characterData$: Observable<CharacterData>;
  private dropKeys: string[] = [];
  droppingKeys: string[] = [];
  private droppingKey$ = new Subject<string>();
  private dropKeys$ = new ReplaySubject<string[]>(1);
  private dropping$: Subscription;

  constructor(route: ActivatedRoute, private saveService: SaveService) {
    this.dropping$ = this.droppingKey$.pipe(delay(400)).subscribe(key => {
      this.dropKeys.push(key);
      this.droppingKeys = this.droppingKeys.filter(k => k !== key);
      this.dropKeys$.next(this.dropKeys);
    });
    this.dropKeys$.next(this.dropKeys);
    this.gameSheetId$ = route.paramMap.pipe(
      map(params => params.get('gameSheetId')),
      filter(gameSheetId => gameSheetId !== null && gameSheetId !== undefined),
    );
    this.characterData$ = this.gameSheetId$.pipe(
      map(gameSheetId => saveService.restore(gameSheetId)),
      filter(characterData => characterData !== undefined),
      shareReplay(1),
    );
    const rawKeyList$ = this.characterData$.pipe(
      map(characterData => Object.entries(characterData.values)),
      map(characterData => characterData.sort(([key1], [key2]) => key1.localeCompare(key2))),
      tap(characterData => this.generateForm(characterData)),
      map(characterData => characterData.map(([key]) => key)),
    );
    this.keys$ = combineLatest(rawKeyList$, this.dropKeys$).pipe(
      map(([rawKeyList, dropKeys]) => rawKeyList.filter(k => !dropKeys.includes(k))),
    );
    this.filteredKeys$ = combineLatest(this.keys$, this.keysFilter$).pipe(
      map(([keys, keyFilter]) => keyFilter ? keys.filter(k => k.includes(keyFilter)) : keys),
    );
  }

  ngOnDestroy() {
    if(this.dropping$) {
      this.dropping$.unsubscribe();
    }
  }

  private generateForm(characterData: [string, CharacterDataValue][]) {
    this.form = new FormGroup({});
    characterData.forEach(([key,value]) => {
      const keyControl = key+'_key';
      this.form.addControl(keyControl, new FormControl(keyControl, Validators.required));
      const valueControl = key+'_value';
      this.form.addControl(valueControl, new FormControl(valueControl));
      this.form.patchValue({ [keyControl]: key || '', [valueControl]: value === undefined ? '' : value });
    });
  }

  onSubmit() {
    this.saveFormState();
  }

  deleteLine(key: string) {
    this.droppingKeys.push(key);
    this.droppingKey$.next(key);
  }

  private saveFormState() {
    const values = {};
    const rawValue = this.form.getRawValue();
    Object.entries(rawValue).forEach(([key, value]) => {
      if(key.endsWith('_key')) {
        const rawKey = key.substring(0, key.length-4);
        if(!this.dropKeys.includes(rawKey)) {
          const valueKey = rawKey + '_value';
          const valueValue = rawValue[valueKey];
          if(valueValue !== undefined && valueValue !== undefined) {
            values[String(value)] = valueValue;
          }
        }
      }
    });
    combineLatest(this.gameSheetId$,this.characterData$).pipe(first()).subscribe(
      ([gameSheetId, characterData]) => 
        this.saveService.save(gameSheetId, produce(characterData, draft => {
          draft.values = { characterName: '', ...values };
        })
      )
    );
  }

  filterChange(event: any) {
    this.keysFilter$.next(event.target.value);
  }
}
