import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatIconModule } from '@angular/material/icon';

import { DiceRollerModule } from 'src/app/dice-roller/dice-roller.module';
import { NoteZoneModule } from 'src/app/note-zone/note-zone.module';
import { SheetConfigPanelModule } from 'src/app/sheet-config-panel/sheet-config-panel.module';
import { FakeTranslateModule } from 'src/app/test-helpers/translate.spec';
import { HomeButtonComponent } from '../home-button/home-button.component';
import { SaveButtonComponent } from '../save-button/save-button.component';
import { SheetWrapperComponent } from './sheet-wrapper.component';

describe('SheetWrapperComponent', () => {
  let component: SheetWrapperComponent;
  let fixture: ComponentFixture<SheetWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetWrapperComponent, HomeButtonComponent, SaveButtonComponent ],
      imports: [ FakeTranslateModule, DiceRollerModule, RouterTestingModule, MatIconModule, NoteZoneModule, SheetConfigPanelModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
