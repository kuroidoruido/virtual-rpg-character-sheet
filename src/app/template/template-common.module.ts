import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

const commontModules: NgModule['exports'] = [
    CommonModule,
    FormsModule, 
    
    MatButtonModule,
    MatSliderModule,
];

@NgModule({
    imports: commontModules,
    exports: commontModules,
})
export class TemplateCommonModule {
}