import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SaveButtonModule } from '../shared/save-button/save-button.module';

const commonModules: NgModule['exports'] = [
    CommonModule, 
    
    SaveButtonModule,

    MatIconModule,
    MatButtonModule,
];

@NgModule({
    imports: commonModules,
    exports: commonModules,
})
export class SheetCommonModule {
}