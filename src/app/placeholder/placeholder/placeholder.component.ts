import { Component, Input } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import {
  CheckboxGroupPlaceholderConfig,
  CheckboxPlaceholderConfig,
  NumberComputedPlaceholderConfig,
  NumberInputPlaceholderConfig,
  PlaceholderConfig,
  TextInputPlaceholderConfig,
  TextZonePlaceholderConfig,
} from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
})
export class PlaceholderComponent {
  @Input() config: PlaceholderConfig;
  @Input() characterData: CharacterData;

  get textInputConfig(): TextInputPlaceholderConfig | undefined {
    if (this.config.type === 'text-input') {
      return this.config;
    }
  }
  get textZoneConfig(): TextZonePlaceholderConfig | undefined {
    if (this.config.type === 'text-zone') {
      return this.config;
    }
  }
  get numberInputConfig(): NumberInputPlaceholderConfig | undefined {
    if (this.config.type === 'number-input') {
      return this.config;
    }
  }
  get numberComputedConfig(): NumberComputedPlaceholderConfig | undefined {
    if (this.config.type === 'number-computed') {
      return this.config;
    }
  }
  get checkboxConfig(): CheckboxPlaceholderConfig | undefined {
    if (this.config.type === 'checkbox') {
      return this.config;
    }
  }
  get checkboxGroupConfig(): CheckboxGroupPlaceholderConfig | undefined {
    if (this.config.type === 'checkbox-group') {
      return this.config;
    }
  }
}
