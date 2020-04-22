import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetConfigToggleButtonComponent } from './sheet-config-toggle-button.component';
import { MatIconModule } from '@angular/material/icon';

describe('SheetConfigToggleButtonComponent', () => {
  let component: SheetConfigToggleButtonComponent;
  let fixture: ComponentFixture<SheetConfigToggleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetConfigToggleButtonComponent ],
      imports: [ MatIconModule ],
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
