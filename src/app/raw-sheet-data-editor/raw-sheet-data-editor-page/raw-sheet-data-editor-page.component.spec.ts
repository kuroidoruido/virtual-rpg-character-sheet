import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawSheetDataEditorPageComponent } from './raw-sheet-data-editor-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

describe('RawSheetDataEditorPageComponent', () => {
  let component: RawSheetDataEditorPageComponent;
  let fixture: ComponentFixture<RawSheetDataEditorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawSheetDataEditorPageComponent ],
      imports: [ RouterTestingModule, MatButtonModule, MatIconModule, MatInputModule, MatTableModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawSheetDataEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
