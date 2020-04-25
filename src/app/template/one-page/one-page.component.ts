import { Component, OnInit, Input } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { OnePageSheetConfig } from 'src/app/model/sheet-config.model';
import { PageConfigService } from '../page-config-service/page-config.service';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.scss']
})
export class OnePageComponent implements OnInit {

  @Input() sheetConfig!: OnePageSheetConfig;
  @Input() characterData: CharacterData = { values: { characterName: '' } };

  constructor(public pageConfigService: PageConfigService) {}

  ngOnInit(): void {
    if(this.sheetConfig === undefined) {
      console.error('You should provide a the sheetData attribute on OnePageComponent');
    }
  }
}
