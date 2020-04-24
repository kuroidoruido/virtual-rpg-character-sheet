import { NgModule } from '@angular/core';

import { TemplateCommonModule } from '../template-common.module';
import { OnePageComponent } from './one-page.component';

@NgModule({
    imports: [ TemplateCommonModule ],
    declarations: [ OnePageComponent ],
    exports: [ OnePageComponent ]
})
export class OnePageModule {
}