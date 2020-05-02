import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SaveService } from 'src/app/shared/save/save.service';

@Component({
  selector: 'app-raw-editor-save-button',
  templateUrl: './raw-editor-save-button.component.html',
  styleUrls: ['./raw-editor-save-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RawEditorSaveButtonComponent {
  constructor(public saveService: SaveService) {}
}
