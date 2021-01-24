import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mode } from 'src/app/model/mode.model';

import { SheetDataConfig, SheetConfig } from 'src/app/model/sheet-config.model';

interface PageNgClass {
  'orientation-portrait'?: true;
  'orientation-landscape'?: true;
  'ratio-A4'?: true;
}

interface PageNgStyle {
  'background-image'?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PageConfigService {
  private mode$ = new BehaviorSubject<Mode>('NORMAL');

  ngClass(pageConfig: SheetDataConfig): Observable<PageNgClass> {
    return this.mode$.pipe(map(mode => ({
      ['ratio-'+pageConfig.pageFormat]: true,
      ['orientation-'+pageConfig.pageOrientation]: true,
      ['mode-'+mode]: true,
    })));
  }

  ngStyle(sheetConfig: SheetConfig, pageNumber: number): PageNgStyle {
    const gameId = sheetConfig.gameId;
    const sheetId = sheetConfig.sheetId;
    const pageName = sheetConfig.pageConfig.pages[pageNumber-1];
    return {
      'background-image': `url("assets/${gameId}/${sheetId}/${pageName}")`,
    }
  }

  getMode(): Observable<Mode> {
    return this.mode$.asObservable();
  }

  getClassMode(): Observable<string> {
    return this.getMode().pipe(map(mode => `mode-${mode}`));
  }

  enablePrintMode(): void {
    this.mode$.next('PRINT');
  }

  disablePrintMode(): void {
    this.mode$.next('NORMAL');
  }
}
