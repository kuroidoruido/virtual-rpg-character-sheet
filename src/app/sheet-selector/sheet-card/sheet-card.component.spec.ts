import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

import { FakeTranslateModule } from 'src/app/test-helpers/translate.spec';
import { SheetCardComponent } from './sheet-card.component';

describe('SheetCardComponent', () => {
  let component: SheetCardComponent;
  let fixture: ComponentFixture<SheetCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetCardComponent ],
      imports: [ FakeTranslateModule, RouterTestingModule, MatCardModule, MatChipsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetCardComponent);
    component = fixture.componentInstance;
    component.game = { gameId: 'id', gameName: 'name', sheets: [] };
    component.sheet = { sheetId: 'sheet-id', sheetName: 'sheet-name', moduleName: 'SheetName', imgAsset: 'img', characters: [] };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
