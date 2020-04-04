import { NgModule } from '@angular/core';

import { TwoPagesModule } from 'src/app/template/two-pages';
import { SheetCommonModule } from '../sheet-common.module';
import { CthulhuV7FrClassiqueComponent } from './cthulhu-v7-fr-classique.component';

@NgModule({
    imports: [SheetCommonModule, TwoPagesModule],
    declarations: [CthulhuV7FrClassiqueComponent],
    exports: [CthulhuV7FrClassiqueComponent],
})
export class CthulhuV7FrClassiqueModule {
}