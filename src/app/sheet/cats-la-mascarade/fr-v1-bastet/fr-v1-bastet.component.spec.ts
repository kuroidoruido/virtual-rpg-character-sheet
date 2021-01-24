import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SheetWrapperModule } from 'src/app/template/sheet-wrapper';
import { TwoPagesModule } from 'src/app/template/two-pages';
import { FakeTranslateModule } from 'src/app/test-helpers/translate.spec';
import { FrV1BastetComponent } from './fr-v1-bastet.component';

describe('FrV1BastetComponent', () => {
  let component: FrV1BastetComponent;
  let fixture: ComponentFixture<FrV1BastetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FrV1BastetComponent ],
      imports: [ FakeTranslateModule, RouterTestingModule, SheetWrapperModule, TwoPagesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrV1BastetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
