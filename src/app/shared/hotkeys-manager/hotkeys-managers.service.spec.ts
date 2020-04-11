import { TestBed } from '@angular/core/testing';

import { HotkeysManagersService } from './hotkeys-managers.service';

describe('HotkeysManagersService', () => {
  let service: HotkeysManagersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotkeysManagersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
