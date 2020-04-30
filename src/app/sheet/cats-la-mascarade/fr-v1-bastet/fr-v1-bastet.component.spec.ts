import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SheetWrapperModule } from 'src/app/template/sheet-wrapper';
import { TwoPagesModule } from 'src/app/template/two-pages';
import { FrV1BastetComponent } from './fr-v1-bastet.component';

describe('FrV1BastetComponent', () => {
  let component: FrV1BastetComponent;
  let fixture: ComponentFixture<FrV1BastetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrV1BastetComponent ],
      imports: [ RouterTestingModule, SheetWrapperModule, TwoPagesModule ]
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
