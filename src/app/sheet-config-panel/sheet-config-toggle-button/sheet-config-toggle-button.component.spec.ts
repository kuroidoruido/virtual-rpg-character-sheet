import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetConfigToggleButtonComponent } from './sheet-config-toggle-button.component';

describe('SheetConfigToggleButtonComponent', () => {
  let component: SheetConfigToggleButtonComponent;
  let fixture: ComponentFixture<SheetConfigToggleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetConfigToggleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetConfigToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
