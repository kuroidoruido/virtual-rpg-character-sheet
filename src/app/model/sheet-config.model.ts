export type Percent = number;

export interface PlaceholderPosition {
  key: string;
  x: number;
  y: number;
  width: Percent;
  value: string | number;
  fontSize?: Percent;
}

export interface OnePageContent {
    pageCount: 1;
    page1: PlaceholderPosition[];
}

export interface TwoPageContent {
    pageCount: 2;
    page1: PlaceholderPosition[];
    page2: PlaceholderPosition[];
}

export type SheetContent = OnePageContent | TwoPageContent;

export interface SheetDataConfig {
    pageFormat: 'A4';// ! TODO fix ratio bug (ratio is not respected if this value is under 100)
    pageWidth: Percent;
    pages: string[];
}

export interface OnePageSheetConfig {
    game: string;
    content: OnePageContent;
    pageConfig: SheetDataConfig;
}
export interface TwoPageSheetConfig {
    game: string;
    content: TwoPageContent;
    pageConfig: SheetDataConfig;
}

export type SheetConfig = OnePageSheetConfig | TwoPageSheetConfig;
