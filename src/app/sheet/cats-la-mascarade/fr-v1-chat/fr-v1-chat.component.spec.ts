import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SheetWrapperModule } from 'src/app/template/sheet-wrapper';
import { TwoPagesModule } from 'src/app/template/two-pages';
import { FrV1ChatComponent } from './fr-v1-chat.component';

describe('FrV1ChatComponent', () => {
  let component: FrV1ChatComponent;
  let fixture: ComponentFixture<FrV1ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrV1ChatComponent ],
      imports: [ RouterTestingModule, SheetWrapperModule, TwoPagesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrV1ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});