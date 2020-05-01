import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwoPagesModule } from 'src/app/template/two-pages';
import { SheetCommonModule } from '../../sheet-common.module';
import { FrV1Chat2Component } from './fr-v1-chat2.component';

const routes: Routes = [{ path: '', component: FrV1Chat2Component }];

@NgModule({
  declarations: [FrV1Chat2Component],
  imports: [ SheetCommonModule, RouterModule.forChild(routes), TwoPagesModule ],
})
export class FrV1Chat2Module { }
