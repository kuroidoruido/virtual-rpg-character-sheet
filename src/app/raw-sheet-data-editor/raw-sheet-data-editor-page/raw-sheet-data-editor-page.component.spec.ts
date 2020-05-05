import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { FakeTranslateModule } from 'src/app/test-helpers/translate.spec';
import { RawSheetDataEditorPageComponent } from './raw-sheet-data-editor-page.component';

describe('RawSheetDataEditorPageComponent', () => {
  let component: RawSheetDataEditorPageComponent;
  let fixture: ComponentFixture<RawSheetDataEditorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawSheetDataEditorPageComponent ],
      imports: [ FakeTranslateModule, RouterTestingModule, MatButtonModule, MatIconModule, MatInputModule, MatTableModule ]
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
