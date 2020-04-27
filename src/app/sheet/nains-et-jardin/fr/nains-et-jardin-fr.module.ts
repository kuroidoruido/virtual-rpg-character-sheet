import { NgModule } from '@angular/core';

import { OnePageModule } from 'src/app/template/one-page';
import { SheetCommonModule } from '../../sheet-common.module';
import { NainsEtJardinFrComponent } from './nains-et-jardin-fr.component';

@NgModule({
  declarations: [ NainsEtJardinFrComponent ],
  imports: [ SheetCommonModule, OnePageModule ],
  exports: [ NainsEtJardinFrComponent ],
})
export class NainsEtJardinFrModule { }
