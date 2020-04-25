import { Pipe, PipeTransform } from '@angular/core';

import { PlaceholderConfig } from 'src/app/model/placeholder.model';

interface PlaceholderNgStyle {
  left: string; 
  top: string;
  width: string;
  'font-size'?: string;
  transform?: string;
}

@Pipe({
  name: 'placeholderStyle',
  pure: true,
})
export class PlaceholderStylePipe implements PipeTransform {

  transform(config: PlaceholderConfig): PlaceholderNgStyle {
    const ngStyle: PlaceholderNgStyle = {
      left: config.x+'%',
      top: config.y+'%',
      width: config.width+'%',
    };
    if(config.fontSize !== undefined) {
      ngStyle["font-size"] = (config.fontSize*100)+'%';
    }
    if(config.rotate !== undefined) {
      ngStyle.transform = 'rotate('+config.rotate+'deg)';
    }
    return ngStyle;
  }

}
