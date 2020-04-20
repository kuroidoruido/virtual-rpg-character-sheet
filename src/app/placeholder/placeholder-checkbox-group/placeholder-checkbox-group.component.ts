import { Component, Input } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { CheckboxGroupPlaceholderConfig } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-placeholder-checkbox-group',
  templateUrl: './placeholder-checkbox-group.component.html',
  styleUrls: ['./placeholder-checkbox-group.component.scss']
})
export class PlaceholderCheckboxGroupComponent {
  @Input() config: CheckboxGroupPlaceholderConfig;
  @Input() characterData: CharacterData;

  selectThisCheckbox() {
    this.characterData.values[this.config.group] = this.config.key;
  }

  get ngClass() {
    return {
      checked: this.characterData.values[this.config.group] === this.config.key,
      [this.config.style || 'circle']: true,
    }
  }
}
