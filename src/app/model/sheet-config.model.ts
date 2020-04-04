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
