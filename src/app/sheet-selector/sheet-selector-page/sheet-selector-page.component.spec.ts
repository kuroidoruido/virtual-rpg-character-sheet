import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FakeTranslateModule } from 'src/app/test-helpers/translate.spec';
import { GameSectionComponent } from '../game-section/game-section.component';
import { SheetCardComponent } from '../sheet-card/sheet-card.component';
import { SheetSelectorPageComponent } from './sheet-selector-page.component';

describe('SheetSelectorPageComponent', () => {
  let component: SheetSelectorPageComponent;
  let fixture: ComponentFixture<SheetSelectorPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetSelectorPageComponent, GameSectionComponent, SheetCardComponent ],
      imports: [ FakeTranslateModule, NoopAnimationsModule, RouterTestingModule, MatCardModule, MatChipsModule, MatIconModule, MatListModule, MatTabsModule, MatToolbarModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetSelectorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
