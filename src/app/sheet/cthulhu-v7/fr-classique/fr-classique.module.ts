import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwoPagesModule } from 'src/app/template/two-pages';
import { SheetCommonModule } from '../../sheet-common.module';
import { CthulhuV7FrClassiqueComponent } from './cthulhu-v7-fr-classique.component';

const routes: Routes = [{ path: '', component: CthulhuV7FrClassiqueComponent }];

@NgModule({
    declarations: [ CthulhuV7FrClassiqueComponent ],
    imports: [ SheetCommonModule, RouterModule.forChild(routes), TwoPagesModule ],
})
export class CthulhuV7FrClassiqueModule {
}