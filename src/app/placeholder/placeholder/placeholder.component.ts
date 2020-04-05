import { Component, Input } from '@angular/core';

import { PlaceholderConfig } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent{

  @Input() config: PlaceholderConfig;
}
