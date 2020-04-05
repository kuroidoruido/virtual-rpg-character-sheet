import { Component, Input } from '@angular/core';

import { NumberInputPlaceholderConfig } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-placeholder-number-input',
  templateUrl: './placeholder-number-input.component.html',
  styleUrls: ['./placeholder-number-input.component.scss']
})
export class PlaceholderNumberInputComponent {
  @Input() config: NumberInputPlaceholderConfig;
}
