import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timer } from 'rxjs';
import { first, mergeMap } from 'rxjs/operators';
import { Page2PdfService, PdfConfig } from 'src/app/shared/page2pdf/page2pdf.service';

import { ShareLinkService } from 'src/app/shared/share-link/share-link.service';
import { SheetStateService } from 'src/app/shared/sheet-state/sheet-state.service';
import { PageConfigService } from 'src/app/template/page-config-service/page-config.service';
import { SheetConfigStateService } from '../sheet-config-state.service';

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
    public sheetStateService: SheetStateService,
    private pageConfigService: PageConfigService,
    private shareLinkService: ShareLinkService, 
    private snackBar: MatSnackBar,
    private page2pdf: Page2PdfService) { }

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
        this.snackBar.open('Share link copied in clipboard', undefined, { duration: 2000 });
      }
    }
  }

  exportPdf() {
    this.pageConfigService.enablePrintMode();
    const pdfConfig: PdfConfig = {
      characterName: this.sheetStateService.currentCharacterData.values.characterName,
      format: this.sheetStateService.currentSheetConfig.pageConfig.pageFormat,
      orientation: this.sheetStateService.currentSheetConfig.pageConfig.pageOrientation,
      pageCount: this.sheetStateService.currentSheetConfig.content.pageCount,
    };
    timer(100).pipe(
      mergeMap(() => this.page2pdf.exportPdf('.page', pdfConfig)),
      first(),
    ).subscribe(() => this.pageConfigService.disablePrintMode());
  }

}
