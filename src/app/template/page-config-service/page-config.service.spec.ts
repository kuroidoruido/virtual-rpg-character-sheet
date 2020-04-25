import { TestBed } from '@angular/core/testing';

import { PageConfigService } from './page-config.service';

describe('PageConfigService', () => {
  let service: PageConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
