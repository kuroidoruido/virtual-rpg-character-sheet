import { NgModule } from '@angular/core';

import { TemplateCommonModule } from '../template-common.module';
import { TwoPagesComponent } from './two-pages.component';

@NgModule({
    imports: [TemplateCommonModule],
    declarations: [TwoPagesComponent],
    exports: [TwoPagesComponent]
})
export class TwoPagesModule {
}