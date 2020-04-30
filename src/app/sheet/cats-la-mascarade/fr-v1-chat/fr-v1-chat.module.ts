import { NgModule } from '@angular/core';

import { TwoPagesModule } from 'src/app/template/two-pages';
import { SheetCommonModule } from '../../sheet-common.module';
import { FrV1ChatComponent } from './fr-v1-chat.component';

@NgModule({
  declarations: [FrV1ChatComponent],
  imports: [ SheetCommonModule, TwoPagesModule ],
  exports: [FrV1ChatComponent],
})
export class FrV1ChatModule { }
