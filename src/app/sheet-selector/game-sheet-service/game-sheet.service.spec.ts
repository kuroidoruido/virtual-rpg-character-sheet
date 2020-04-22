import { TestBed } from '@angular/core/testing';

import { GameSheetService } from './game-sheet.service';

describe('GameSheetService', () => {
  let service: GameSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
