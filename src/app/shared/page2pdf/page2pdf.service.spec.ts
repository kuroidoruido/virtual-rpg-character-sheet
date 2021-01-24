import { TestBed } from '@angular/core/testing';

import { Page2PdfService } from './page2pdf.service';

describe(Page2PdfService.name, () => {
  let service: Page2PdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ Page2PdfService ] });
    service = TestBed.inject(Page2PdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
