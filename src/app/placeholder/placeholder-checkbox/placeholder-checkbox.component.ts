import { Component, Input } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { CheckboxPlaceholderConfig } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-placeholder-checkbox',
  templateUrl: './placeholder-checkbox.component.html',
  styleUrls: ['./placeholder-checkbox.component.scss']
})
export class PlaceholderCheckboxComponent {
  @Input() config: CheckboxPlaceholderConfig;
  @Input() characterData: CharacterData;

  toggleCheckbox() {
    let currentValue = this.characterData.values[this.config.key];
    console.log('toggleCheckbox', currentValue, typeof currentValue)
    if(typeof currentValue !== 'boolean') {
      currentValue = currentValue === 'true';
    }
    this.characterData.values[this.config.key] = !currentValue;
  }

  get ngClass() {
    return {
      checked: this.characterData.values[this.config.key],
      [this.config.style || 'filled-circle']: true,
    }
  }
}
