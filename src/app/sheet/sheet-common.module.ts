import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const commonModules: NgModule['exports'] = [
    CommonModule, 
    
    MatIconModule,
    MatButtonModule,
];

@NgModule({
    imports: commonModules,
    exports: commonModules,
})
export class SheetCommonModule {
}