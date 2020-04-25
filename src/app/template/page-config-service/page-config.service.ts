import { Injectable } from '@angular/core';

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

  ngClass(pageConfig: SheetDataConfig): PageNgClass {
    return {
      ['ratio-'+pageConfig.pageFormat]: true,
      ['orientation-'+pageConfig.pageOrientation]: true,
    };
  }

  ngStyle(sheetConfig: SheetConfig, pageNumber: number): PageNgStyle {
    const gameId = sheetConfig.gameId;
    const sheetId = sheetConfig.sheetId;
    const pageName = sheetConfig.pageConfig.pages[pageNumber-1];
    return {
      'background-image': `url("assets/${gameId}/${sheetId}/${pageName}")`,
    }
  }
}
