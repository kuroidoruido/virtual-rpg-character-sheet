import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SheetConfigToggleButtonComponent } from './sheet-config-toggle-button.component';
import { MatIconModule } from '@angular/material/icon';

describe('SheetConfigToggleButtonComponent', () => {
  let component: SheetConfigToggleButtonComponent;
  let fixture: ComponentFixture<SheetConfigToggleButtonComponent>;

  beforeEach(waitForAsync(() => {
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
