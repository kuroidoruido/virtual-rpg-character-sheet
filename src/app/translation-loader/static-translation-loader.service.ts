import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import * as en from 'src/assets/i18n/en.json';
import * as fr from 'src/assets/i18n/fr.json';

const TRANSLATIONS = {
  en: (en as any).default, fr: (fr as any).default
};

@Injectable()
export class StaticTranslationLoaderService extends TranslateLoader {
  getTranslation(lang: string): Observable<unknown> {
    return of(TRANSLATIONS[lang]);
  }
}

// AoT requires an exported function for factories
export function StaticTranslationLoaderFactory() {
  return new StaticTranslationLoaderService();
}
