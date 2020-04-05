import { Component, Input } from '@angular/core';

import { NumberComputedPlaceholderConfig } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-placeholder-number-computed',
  templateUrl: './placeholder-number-computed.component.html',
  styleUrls: ['./placeholder-number-computed.component.scss']
})
export class PlaceholderNumberComputedComponent {
  @Input() config: NumberComputedPlaceholderConfig;
}
