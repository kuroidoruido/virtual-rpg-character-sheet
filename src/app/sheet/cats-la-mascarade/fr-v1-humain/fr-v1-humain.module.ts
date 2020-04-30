import { NgModule } from '@angular/core';

import { TwoPagesModule } from 'src/app/template/two-pages';
import { SheetCommonModule } from '../../sheet-common.module';
import { FrV1HumainComponent } from './fr-v1-humain.component';

@NgModule({
  declarations: [FrV1HumainComponent],
  imports: [ SheetCommonModule, TwoPagesModule ],
  exports: [FrV1HumainComponent],
})
export class FrV1HumainModule { }
