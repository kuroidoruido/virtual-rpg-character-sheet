import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { NoteZoneModule } from '../note-zone/note-zone.module';
import { SheetWrapperModule } from '../template/sheet-wrapper';

const commonModules: NgModule['exports'] = [
    CommonModule, 
    
    SheetWrapperModule,
    NoteZoneModule,

    MatIconModule,
    MatButtonModule,
];

@NgModule({
    imports: commonModules,
    exports: commonModules,
})
export class SheetCommonModule {
}