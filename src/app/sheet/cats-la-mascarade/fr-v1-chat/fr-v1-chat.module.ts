import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwoPagesModule } from 'src/app/template/two-pages';
import { SheetCommonModule } from '../../sheet-common.module';
import { FrV1ChatComponent } from './fr-v1-chat.component';

const routes: Routes = [{ path: '', component: FrV1ChatComponent }];

@NgModule({
  declarations: [FrV1ChatComponent],
  imports: [ SheetCommonModule, RouterModule.forChild(routes), TwoPagesModule ],
})
export class FrV1ChatModule { }
