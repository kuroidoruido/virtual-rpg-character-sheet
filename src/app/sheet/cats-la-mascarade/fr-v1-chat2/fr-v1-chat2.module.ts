import { NgModule } from '@angular/core';

import { TwoPagesModule } from 'src/app/template/two-pages';
import { SheetCommonModule } from '../../sheet-common.module';
import { FrV1Chat2Component } from './fr-v1-chat2.component';

@NgModule({
  declarations: [FrV1Chat2Component],
  imports: [ SheetCommonModule, TwoPagesModule ],
  exports: [FrV1Chat2Component],
})
export class FrV1Chat2Module { }
