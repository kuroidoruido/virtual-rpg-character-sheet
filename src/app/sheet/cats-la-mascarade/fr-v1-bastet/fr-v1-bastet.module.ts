import { NgModule } from '@angular/core';

import { TwoPagesModule } from 'src/app/template/two-pages';
import { SheetCommonModule } from '../../sheet-common.module';
import { FrV1BastetComponent } from './fr-v1-bastet.component';

@NgModule({
  declarations: [FrV1BastetComponent],
  imports: [ SheetCommonModule, TwoPagesModule ],
  exports: [FrV1BastetComponent],
})
export class FrV1BastetModule { }
