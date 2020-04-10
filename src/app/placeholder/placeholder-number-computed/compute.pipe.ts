import { Pipe, PipeTransform } from '@angular/core';

import { CharacterData, CharacterDataValue } from 'src/app/model/character-data.model';
import { NumberComputedPlaceholderConfig } from 'src/app/model/placeholder.model';

@Pipe({
  name: 'compute',
  pure: true,
})
export class ComputePipe implements PipeTransform {

  transform(characterData: CharacterData, config: NumberComputedPlaceholderConfig): CharacterDataValue {
    if(characterData === undefined || config === undefined || config.compute === undefined) {
      return '';
    }
    return config.compute(characterData);
  }

}
