import { Component, Input } from '@angular/core';
import { TextZonePlaceholderConfig } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-placeholder-text-zone',
  templateUrl: './placeholder-text-zone.component.html',
  styleUrls: ['./placeholder-text-zone.component.scss']
})
export class PlaceholderTextZoneComponent {
  @Input() config: TextZonePlaceholderConfig;
}
