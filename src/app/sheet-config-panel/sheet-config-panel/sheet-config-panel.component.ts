import { Component, ViewChild } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { SheetConfigStateService } from '../sheet-config-state.service';
import { ShareLinkService } from 'src/app/shared/share-link/share-link.service';
import { SheetStateService } from 'src/app/shared/sheet-state/sheet-state.service';

@Component({
  selector: 'app-sheet-config-panel',
  templateUrl: './sheet-config-panel.component.html',
  styleUrls: ['./sheet-config-panel.component.scss']
})
export class SheetConfigPanelComponent {

  @ViewChild('shareLinkInput', { static: false }) shareLinkInput: { nativeElement: HTMLInputElement | undefined } | undefined;

  showShareLink: boolean = false;
  shareLink: string = '';

  constructor(
    public sheetConfigPanelService: SheetConfigStateService, 
    private sheetStateService: SheetStateService, 
    private shareLinkService: ShareLinkService, 
    private snackBar: MatSnackBar) { }

  toggleShowShareLink() {
    this.showShareLink = !this.showShareLink;
    if (this.showShareLink) {
      this.shareLink = this.shareLinkService.generateShareLink(this.sheetStateService.currentCharacterData);
    }
  }

  copyShareLinkToClipboard() {
    if(this.shareLinkInput !== undefined && this.shareLinkInput.nativeElement !== undefined) {
      this.shareLinkInput.nativeElement.select();
      this.shareLinkInput.nativeElement.setSelectionRange(0, 999999);
      const copied = document.execCommand('copy');

      if (copied) {
        this.snackBar.open('Share link copied in clipboard',undefined, { duration: 2000 });
      }
    }
  }

}
