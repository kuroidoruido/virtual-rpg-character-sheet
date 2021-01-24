import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SheetWrapperModule } from 'src/app/template/sheet-wrapper';
import { TwoPagesModule } from 'src/app/template/two-pages';
import { FakeTranslateModule } from 'src/app/test-helpers/translate.spec';
import { FrV1HumainComponent } from './fr-v1-humain.component';

describe('FrV1HumainComponent', () => {
  let component: FrV1HumainComponent;
  let fixture: ComponentFixture<FrV1HumainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FrV1HumainComponent ],
      imports: [ FakeTranslateModule, RouterTestingModule, SheetWrapperModule, TwoPagesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrV1HumainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
