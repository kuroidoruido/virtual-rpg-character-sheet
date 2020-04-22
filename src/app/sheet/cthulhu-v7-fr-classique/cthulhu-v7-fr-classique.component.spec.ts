import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetWrapperModule } from 'src/app/template/sheet-wrapper';
import { TwoPagesModule } from 'src/app/template/two-pages';
import { CthulhuV7FrClassiqueComponent } from './cthulhu-v7-fr-classique.component';

describe('CthulhuV7FrClassiqueComponent', () => {
  let component: CthulhuV7FrClassiqueComponent;
  let fixture: ComponentFixture<CthulhuV7FrClassiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CthulhuV7FrClassiqueComponent ],
      imports: [ SheetWrapperModule, TwoPagesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CthulhuV7FrClassiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
