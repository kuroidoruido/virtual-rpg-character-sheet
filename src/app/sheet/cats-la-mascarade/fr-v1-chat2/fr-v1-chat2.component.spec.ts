import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SheetWrapperModule } from 'src/app/template/sheet-wrapper';
import { TwoPagesModule } from 'src/app/template/two-pages';
import { FrV1Chat2Component } from './fr-v1-chat2.component';

describe('FrV1Chat2Component', () => {
  let component: FrV1Chat2Component;
  let fixture: ComponentFixture<FrV1Chat2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrV1Chat2Component ],
      imports: [ RouterTestingModule, SheetWrapperModule, TwoPagesModule ]
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
