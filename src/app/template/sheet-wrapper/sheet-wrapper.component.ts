import { Component, Output, EventEmitter, AfterViewInit, ViewChild, Input } from '@angular/core';

import { CdkDragMove } from '@angular/cdk/drag-drop';
import { ReplaySubject } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { HotkeysManagersService } from 'src/app/shared/hotkeys-manager/hotkeys-managers.service';
import { SaveService } from 'src/app/shared/save/save.service';
import { SheetStateService } from 'src/app/shared/sheet-state/sheet-state.service';

@Component({
  selector: 'app-sheet-wrapper',
  templateUrl: './sheet-wrapper.component.html',
  styleUrls: ['./sheet-wrapper.component.scss']
})
export class SheetWrapperComponent implements AfterViewInit {
  gameSheetId = '';

  @ViewChild('sheetWrapper', { static: true }) sheetWrapperElement: { nativeElement: HTMLElement } | undefined;

  private sheetWrapperWidth$ = new ReplaySubject<number | undefined>(1);
  sheetWrapperWidthPx$ = this.sheetWrapperWidth$.pipe(map(w => w + 'px'));

  private last = 0;
  
  constructor(private sheetStateService: SheetStateService, private saveService: SaveService, hotkeysManager: HotkeysManagersService) {
    hotkeysManager.CtrlS$.subscribe(() => this.save());
    this.gameSheetId = this.sheetStateService.currentGameSheetId;
  }

  ngAfterViewInit(): void {
    if(this.sheetWrapperElement !== undefined && this.sheetWrapperElement.nativeElement !== undefined) {
      setTimeout(() => {
        this.sheetWrapperWidth$.next(this.sheetWrapperElement.nativeElement.clientWidth);
      })
    }
  }

  dragMove(event: CdkDragMove) {
    const distanceForThisDrag = event.distance.x;
    const distanceFromLastEvent = distanceForThisDrag - this.last;
    this.last = distanceForThisDrag;
    this.resize(-distanceFromLastEvent);
    event.source.reset();
  }

  dragEnd() {
    this.last = 0;
  }

  save() {
    this.saveService.save(this.gameSheetId, this.sheetStateService.currentCharacterData);
  }

  private resize(widthChange: number) {
    this.sheetWrapperWidth$.pipe(first()).subscribe(current => this.sheetWrapperWidth$.next(current - widthChange));
  }

}
