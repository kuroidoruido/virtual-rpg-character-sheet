import { Component, OnInit, Input } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { TwoPageSheetConfig } from 'src/app/model/sheet-config.model';

@Component({
  selector: 'app-two-pages',
  templateUrl: './two-pages.component.html',
  styleUrls: ['./two-pages.component.scss']
})
export class TwoPagesComponent implements OnInit {

  @Input() sheetConfig!: TwoPageSheetConfig;
  @Input() characterData: CharacterData = { values: {} };

  ngOnInit(): void {
    if(this.sheetConfig === undefined) {
      console.error('You should provide a the sheetData attribute on TwoPagesComponent');
    }
  }
}
