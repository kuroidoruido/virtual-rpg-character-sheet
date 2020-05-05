import { Component, Input } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { CheckboxGroupPlaceholderConfig, CheckboxStyle } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-placeholder-checkbox-group',
  templateUrl: './placeholder-checkbox-group.component.html',
  styleUrls: ['./placeholder-checkbox-group.component.scss']
})
export class PlaceholderCheckboxGroupComponent {
  @Input() config: CheckboxGroupPlaceholderConfig;
  @Input() characterData: CharacterData;

  private getCurrentValue(): boolean {
    let currentValue = this.characterData.values[this.config.group];
    return currentValue === this.config.key;
  }

  private setCurrentValue(value: string) {
    this.characterData.values[this.config.group] = value;
  }

  private get currentStyle(): CheckboxStyle {
    const configStyle = (this.config as any).style;
    const savedStyle = this.characterData.values[this.config.group+'_style'] as CheckboxStyle;
    return configStyle || savedStyle || 'filled-circle';
  }

  private set currentStyle(style: CheckboxStyle) {
    this.characterData.values[this.config.group+'_style'] = style;
  }

  selectThisCheckbox() {
    const config = this.config as { styleToggle: CheckboxStyle[] };
    if(config.styleToggle !== undefined) {
      if(this.getCurrentValue()) {
        const currentStyleIndex = config.styleToggle.indexOf(this.currentStyle);
        if (currentStyleIndex < config.styleToggle.length-1) {
          this.currentStyle = config.styleToggle[currentStyleIndex+1];
        } else {
          this.currentStyle = config.styleToggle[0];
        }
      } else {
        this.currentStyle = config.styleToggle[0];
      }
    }
    this.setCurrentValue(this.config.key);
  }

  get ngClass() {
    return {
      checked: this.getCurrentValue(),
      [this.currentStyle]: true,
    }
  }
}
