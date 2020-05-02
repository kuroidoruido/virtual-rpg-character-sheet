import { Injectable } from '@angular/core';
import { CharacterData } from '../../model/character-data.model';

@Injectable({
  providedIn: 'root'
})
export class ShareLinkService {

  constructor() { }
 
  generateShareLink(characterData: CharacterData, currentUrl = window.location.href || ''): string | undefined {
    const strData = JSON.stringify(characterData);
    if(strData !== undefined) {
      const base64Data = btoa(strData);
      if(base64Data !== undefined) {
        const cleanUrl = currentUrl.split('#')[0];
        if(cleanUrl !== undefined) {
          return `${cleanUrl}#${base64Data}`;
        }
      }
    }
    return undefined;
  }

  decodeShareLink(currentUrl = window.location.href): CharacterData | undefined {
    const base64Data = currentUrl.split('#')[1];
    if(base64Data !== undefined) {
      const strData = atob(base64Data);
      if(strData !== undefined) {
        const data = JSON.parse(strData);
        return data;
      }
    }
    return undefined;
  }
}
