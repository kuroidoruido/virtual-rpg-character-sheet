import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnePageModule } from 'src/app/template/one-page';
import { SheetCommonModule } from '../../sheet-common.module';
import { NainsEtJardinFrComponent } from './nains-et-jardin-fr.component';

const routes: Routes = [{ path: '', component: NainsEtJardinFrComponent }];

@NgModule({
  declarations: [ NainsEtJardinFrComponent ],
  imports: [ SheetCommonModule, RouterModule.forChild(routes), OnePageModule ],
})
export class NainsEtJardinFrModule { }
