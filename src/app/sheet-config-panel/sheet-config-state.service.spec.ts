import { TestBed } from '@angular/core/testing';

import { SheetConfigStateService } from './sheet-config-state.service';

describe('SheetConfigStateService', () => {
  let service: SheetConfigStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheetConfigStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
