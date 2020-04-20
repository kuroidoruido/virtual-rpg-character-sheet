import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlaceholderTextZoneComponent } from './placeholder-text-zone/placeholder-text-zone.component';
import { PlaceholderTextInputComponent } from './placeholder-text-input/placeholder-text-input.component';
import { PlaceholderNumberInputComponent } from './placeholder-number-input/placeholder-number-input.component';
import { PlaceholderNumberComputedComponent } from './placeholder-number-computed/placeholder-number-computed.component';
import { PlaceholderCheckboxComponent } from './placeholder-checkbox/placeholder-checkbox.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ComputePipe } from './placeholder-number-computed/compute.pipe';
import { PlaceholderCheckboxGroupComponent } from './placeholder-checkbox-group/placeholder-checkbox-group.component';

@NgModule({
  declarations: [
    PlaceholderTextZoneComponent, 
    PlaceholderTextInputComponent,
    PlaceholderNumberInputComponent, 
    PlaceholderNumberComputedComponent, 
    PlaceholderCheckboxComponent, 
    PlaceholderComponent,
    ComputePipe,
    PlaceholderCheckboxGroupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [PlaceholderComponent],
})
export class PlaceholderModule { }
