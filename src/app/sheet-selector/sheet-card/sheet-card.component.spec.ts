import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SheetCardComponent } from './sheet-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

describe('SheetCardComponent', () => {
  let component: SheetCardComponent;
  let fixture: ComponentFixture<SheetCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetCardComponent ],
      imports: [ RouterTestingModule, MatCardModule, MatChipsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetCardComponent);
    component = fixture.componentInstance;
    component.game = { gameId: 'id', gameName: 'name', sheets: [] };
    component.sheet = { sheetId: 'sheet-id', sheetName: 'sheet-name', imgAsset: 'img', characters: [] };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
