import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SheetWrapperModule } from 'src/app/template/sheet-wrapper';
import { TwoPagesModule } from 'src/app/template/two-pages';
import { FrComponent } from './fr.component';

describe('FrComponent', () => {
  let component: FrComponent;
  let fixture: ComponentFixture<FrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrComponent ],
      imports: [ RouterTestingModule, SheetWrapperModule, TwoPagesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
