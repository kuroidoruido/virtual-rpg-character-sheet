import { Component, Input } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { CheckboxPlaceholderConfig, CheckboxStyle } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-placeholder-checkbox',
  templateUrl: './placeholder-checkbox.component.html',
  styleUrls: ['./placeholder-checkbox.component.scss']
})
export class PlaceholderCheckboxComponent{
  @Input() config: CheckboxPlaceholderConfig;
  @Input() characterData: CharacterData;

  private get currentValue(): boolean {
    let currentValue = this.characterData.values[this.config.key];
    if (typeof currentValue !== 'boolean') {
      currentValue = currentValue === 'true';
    }
    return currentValue;
  }

  private set currentValue(value: boolean) {
    this.characterData.values[this.config.key] = value;
  }

  private get currentStyle(): CheckboxStyle {
    const configStyle = (this.config as any).style;
    const savedStyle = this.characterData.values[this.config.key+'_style'] as CheckboxStyle;
    return configStyle || savedStyle || 'filled-circle';
  }

  private set currentStyle(style: CheckboxStyle) {
    this.characterData.values[this.config.key+'_style'] = style;
  }

  toggleCheckbox() {
    if ((this.config as any).styleToggle !== undefined) {
      const config = this.config as { styleToggle: CheckboxStyle[] };
      if (this.currentValue) {
        const currentStyleIndex = config.styleToggle.indexOf(this.currentStyle);
        if (currentStyleIndex < config.styleToggle.length-1) {
          this.currentStyle = config.styleToggle[currentStyleIndex+1];
        } else {
          this.currentValue = false;
        }
      } else {
        this.currentValue = true;
        this.currentStyle = config.styleToggle[0];
      }
    } else {
      this.currentValue = !this.currentValue;
    }
  }

  get ngClass() {
    return {
      checked: this.currentValue,
      [this.currentStyle || 'filled-circle']: true,
    }
  }
}
