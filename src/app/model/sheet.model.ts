export type Percent = number;

export interface SheetDataPosition {
  key: string;
  x: number;
  y: number;
  width: Percent;
  value: string | number;
  fontSize?: Percent;
}

export interface OneSheetDataContent {
    pageCount: 1;
    page1: SheetDataPosition[];
}

export interface TwoSheetDataContent {
    pageCount: 2;
    page1: SheetDataPosition[];
    page2: SheetDataPosition[];
}

export type SheetDataContent = OneSheetDataContent | TwoSheetDataContent;

export interface SheetDataConfig {
    pageFormat: 'A4';// ! TODO fix ratio bug (ratio is not respected if this value is under 100)
    pageWidth: Percent;
    pages: string[];
}

export interface OneSheetData {
    content: OneSheetDataContent;
    pageConfig: SheetDataConfig;
}
export interface TwoSheetData {
    content: TwoSheetDataContent;
    pageConfig: SheetDataConfig;
}

export type SheetData = OneSheetData | TwoSheetData;