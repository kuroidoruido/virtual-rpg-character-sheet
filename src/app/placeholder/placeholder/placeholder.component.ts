import { Component, Input } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { PlaceholderConfig } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent{
  @Input() config: PlaceholderConfig;
  @Input() characterData: CharacterData;
}
