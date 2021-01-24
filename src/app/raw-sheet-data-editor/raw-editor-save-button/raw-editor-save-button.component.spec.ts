import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FakeTranslateModule } from 'src/app/test-helpers/translate.spec';
import { RawEditorSaveButtonComponent } from './raw-editor-save-button.component';

describe('RawEditorSaveButtonComponent', () => {
  let component: RawEditorSaveButtonComponent;
  let fixture: ComponentFixture<RawEditorSaveButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RawEditorSaveButtonComponent ],
      imports: [ FakeTranslateModule, MatButtonModule, MatIconModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawEditorSaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
