import { Component, Input } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { TextZonePlaceholderConfig } from 'src/app/model/placeholder.model';
import { PageConfigService } from 'src/app/template/page-config-service/page-config.service';

@Component({
  selector: 'app-placeholder-text-zone',
  templateUrl: './placeholder-text-zone.component.html',
  styleUrls: ['./placeholder-text-zone.component.scss']
})
export class PlaceholderTextZoneComponent {
  @Input() config: TextZonePlaceholderConfig;
  @Input() characterData: CharacterData;

  mode$ = this.pageConfigService.getMode();

  constructor(private pageConfigService: PageConfigService) {}
}
