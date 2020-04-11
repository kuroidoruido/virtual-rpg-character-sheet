import { Component, EventEmitter,Output } from '@angular/core';

import { SaveService } from 'src/app/sheet/shared/save/save.service';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent {
  @Output() save = new EventEmitter<void>();

  constructor(public saveService: SaveService) { }
}
