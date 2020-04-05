import { Component, Input } from '@angular/core';
import { TextInputPlaceholderConfig } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-placeholder-text-input',
  templateUrl: './placeholder-text-input.component.html',
  styleUrls: ['./placeholder-text-input.component.scss']
})
export class PlaceholderTextInputComponent {
  @Input() config: TextInputPlaceholderConfig;
}
