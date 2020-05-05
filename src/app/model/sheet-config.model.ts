import { PlaceholderConfig } from './placeholder.model';

type Percent = number;

export interface OnePageContent {
    pageCount: 1;
    page1: PlaceholderConfig[];
}

export interface TwoPageContent {
    pageCount: 2;
    page1: PlaceholderConfig[];
    page2: PlaceholderConfig[];
}

export type SheetContent = OnePageContent | TwoPageContent;

export type PageFormat = 'A4' | 'A5';

export type PageOrientation = 'portrait' | 'landscape';

export interface SheetDataConfig {
    pageFormat: PageFormat;
    pageOrientation: PageOrientation;
    pageWidth: Percent;
    pages: string[];
}

interface BaseSheetConfig {
    gameId: string;
    sheetId: string;
    pageConfig: SheetDataConfig;
}

export interface OnePageSheetConfig extends BaseSheetConfig {
    content: OnePageContent;
}
export interface TwoPageSheetConfig extends BaseSheetConfig {
    content: TwoPageContent;
}

export type SheetConfig = OnePageSheetConfig | TwoPageSheetConfig;
