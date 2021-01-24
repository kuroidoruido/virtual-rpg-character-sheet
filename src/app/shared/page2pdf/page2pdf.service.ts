import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';

import { PageFormat, PageOrientation } from 'src/app/model/sheet-config.model';

export interface PdfConfig {
  characterName: string;
  format: PageFormat;
  orientation: PageOrientation;
  pageCount: number;
}

interface Dimensions {
  width: number;
  height: number;
}

type AllPageDimensions = {
  [format in PageFormat]: { [orientation in PageOrientation]: Dimensions; };
};
const PAGE_DIMENSIONS: AllPageDimensions = {
  'A4': {
    portrait: { width: 210, height: 297 },
    landscape: { width: 297, height: 210 },
  },
  'A5': {
    portrait: { width: 149, height: 210 },
    landscape: { width: 210, height: 149 },
  }
};

@Injectable()
export class Page2PdfService {

  constructor() { }

  exportPdf(selector: string, { characterName, format, orientation, pageCount }: PdfConfig): Observable<jsPDF> {
    return new Observable((subscriber) => {
      const pdfName = this.generatePdfName(new Date(), characterName);
      const doc = new jsPDF({ format, orientation, unit: 'mm' });
      const pageDimension = PAGE_DIMENSIONS[format][orientation];
      const sub = this.html2dataCanvas(selector).subscribe({
        next: (canvas) => this.appendPage(doc, pageDimension, canvas, doc.getNumberOfPages() === pageCount),
        complete() {
          sub.unsubscribe();
          const promise: Promise<jsPDF> = (doc.save(pdfName, { returnPromise: true }) as any) as Promise<jsPDF>;
          promise.then(pdf => subscriber.next(pdf));
        }
      });

    });
  }

  private html2dataCanvas(selector: string): Observable<HTMLCanvasElement> {
    return new Observable(subscriber => {
      const promises: Promise<HTMLCanvasElement>[] = [];
      document.querySelectorAll(selector).forEach(item => {
        promises.push(html2canvas(item as HTMLElement, {}));
      });
      Promise.all(promises).then(allCanvas => {
        allCanvas.forEach(canvas => subscriber.next(canvas));
      }).finally(() => subscriber.complete());
    });
  }

  private generatePdfName(date: Date, characterName: string): string {
    const month = date.getMonth();
    const strDate = `${date.getFullYear()}-${month < 9 ? '0' : ''}${month+1}-${date.getDate()}`;
    const sanitizedCharacterName = characterName.replace(/[^a-zA-Z0-9]/g, '-');
    return `${strDate}_${sanitizedCharacterName}.pdf`;
  }

  private appendPage(doc: jsPDF, pageDimension: Dimensions, canvas: HTMLCanvasElement, lastPage: boolean): void {
    const imageData = canvas.toDataURL('data:image/png', 1);
    const imageDimensions = this.computeImageDimension(canvas, pageDimension);
    doc.addImage({ imageData, x: 0, y: 0, ...imageDimensions });
    if(!lastPage) {
      doc.addPage();
    }
  }

  private computeImageDimension(canvasDimension: Dimensions, pageDimension: Dimensions): Dimensions {
    if (canvasDimension.width > canvasDimension.height) {
      return {
        height: pageDimension.height,
        width: canvasDimension.width * (pageDimension.height / canvasDimension.height),
      };
    } else {
      return { 
        width: pageDimension.width,
        height: canvasDimension.height * (pageDimension.width / canvasDimension.width),
      };
    }
  }
}
