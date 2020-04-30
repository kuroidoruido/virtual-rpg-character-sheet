import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SheetWrapperModule } from 'src/app/template/sheet-wrapper';
import { TwoPagesModule } from 'src/app/template/two-pages';
import { FrV1HumainComponent } from './fr-v1-humain.component';

describe('FrV1HumainComponent', () => {
  let component: FrV1HumainComponent;
  let fixture: ComponentFixture<FrV1HumainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrV1HumainComponent ],
      imports: [ RouterTestingModule, SheetWrapperModule, TwoPagesModule ]
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
