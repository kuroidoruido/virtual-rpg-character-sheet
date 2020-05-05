import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';

export const FakeTranslateModule = TranslateModule.forRoot({ loader: {  provide: TranslateLoader, useClass: TranslateFakeLoader } });