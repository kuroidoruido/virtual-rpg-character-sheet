import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { HasEventTargetAddRemove } from 'rxjs/internal/observable/fromEvent';
import { share, filter, tap } from 'rxjs/operators';

const CTRL = 'ctrl';

@Injectable({ providedIn: 'root' })
export class HotkeysManagersService {
  public CtrlS$: Observable<KeyboardEvent>;

  constructor(@Inject(DOCUMENT) document: Document) {
    const documentKeyup$ = this.keyups(document);
    this.CtrlS$ = this.newHotkeys(documentKeyup$, CTRL, 's');
  }

  private newHotkeys(
    keyup$: Observable<KeyboardEvent>,
    ...keys: string[]
  ): Observable<KeyboardEvent> {
    const ctrlPressed = keys.includes(CTRL);
    return keyup$.pipe(
      filter((e) => e.ctrlKey === ctrlPressed),
      filter((e) => keys.includes(e.key.toLowerCase())),
      tap((e) => e.preventDefault())
    );
  }

  private keyups(
    target: HasEventTargetAddRemove<unknown>
  ): Observable<KeyboardEvent> {
    return (fromEvent(target, 'keyup') as any).pipe(share());
  }
}
