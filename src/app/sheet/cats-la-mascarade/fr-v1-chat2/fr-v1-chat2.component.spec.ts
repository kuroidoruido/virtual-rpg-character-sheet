import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SheetWrapperModule } from 'src/app/template/sheet-wrapper';
import { TwoPagesModule } from 'src/app/template/two-pages';
import { FakeTranslateModule } from 'src/app/test-helpers/translate.spec';
import { FrV1Chat2Component } from './fr-v1-chat2.component';

describe('FrV1Chat2Component', () => {
  let component: FrV1Chat2Component;
  let fixture: ComponentFixture<FrV1Chat2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FrV1Chat2Component ],
      imports: [ FakeTranslateModule, RouterTestingModule, SheetWrapperModule, TwoPagesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrV1Chat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
