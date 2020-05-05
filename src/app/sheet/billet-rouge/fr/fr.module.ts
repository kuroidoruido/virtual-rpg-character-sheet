import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwoPagesModule } from 'src/app/template/two-pages';
import { SheetCommonModule } from '../../sheet-common.module';
import { FrComponent } from './fr.component';

const routes: Routes = [{ path: '', component: FrComponent }];

@NgModule({
  declarations: [FrComponent],
  imports: [ SheetCommonModule, RouterModule.forChild(routes), TwoPagesModule ],
})
export class BilletRougeFrModule { }
