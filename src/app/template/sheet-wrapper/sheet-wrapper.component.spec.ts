import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconModule } from '@angular/material/icon';

import { NoteZoneModule } from 'src/app/note-zone/note-zone.module';
import { SaveButtonModule } from 'src/app/shared/save-button/save-button.module';
import { SheetConfigPanelModule } from 'src/app/sheet-config-panel/sheet-config-panel.module';
import { SheetWrapperComponent } from './sheet-wrapper.component';

describe('SheetWrapperComponent', () => {
  let component: SheetWrapperComponent;
  let fixture: ComponentFixture<SheetWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetWrapperComponent ],
      imports: [ MatIconModule, NoteZoneModule, SaveButtonModule, SheetConfigPanelModule ],
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
