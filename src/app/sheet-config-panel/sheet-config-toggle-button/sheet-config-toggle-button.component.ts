import { Component, Input } from '@angular/core';
import { SheetConfigStateService } from '../sheet-config-state.service';

@Component({
  selector: 'app-sheet-config-toggle-button',
  templateUrl: './sheet-config-toggle-button.component.html',
  styleUrls: ['./sheet-config-toggle-button.component.scss']
})
export class SheetConfigToggleButtonComponent {

  @Input() forceShow: boolean = false;

  constructor(public sheetConfigPanelService: SheetConfigStateService) {}

  toggle() {
    this.sheetConfigPanelService.toggleOpenClosePanel();
  }

  get show(): boolean {
    return this.forceShow || !this.sheetConfigPanelService.panelIsOpened;
  }
}
