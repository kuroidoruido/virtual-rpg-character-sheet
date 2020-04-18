import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SheetConfigStateService {

  private _panelIsOpened = false;
  private _panelIsOpened$ = new ReplaySubject<boolean>(1);

  constructor() { }

  get panelIsOpened() {
    return this._panelIsOpened;
  }

  get panelIsOpened$() {
    return this._panelIsOpened$.asObservable();
  }

  toggleOpenClosePanel() {
    this._panelIsOpened = !this._panelIsOpened;
    this._panelIsOpened$.next(this._panelIsOpened);
  }

}
