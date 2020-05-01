import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwoPagesModule } from 'src/app/template/two-pages';
import { SheetCommonModule } from '../../sheet-common.module';
import { FrV1BastetComponent } from './fr-v1-bastet.component';

const routes: Routes = [{ path: '', component: FrV1BastetComponent }];

@NgModule({
  declarations: [FrV1BastetComponent],
  imports: [ SheetCommonModule, RouterModule.forChild(routes), TwoPagesModule ],
})
export class FrV1BastetModule { }
