import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ComputePipe } from './compute.pipe';
import { PlaceholderNumberComputedComponent } from './placeholder-number-computed.component';

describe('PlaceholderNumberComputedComponent', () => {
  let component: PlaceholderNumberComputedComponent;
  let fixture: ComponentFixture<PlaceholderNumberComputedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderNumberComputedComponent, ComputePipe ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderNumberComputedComponent);
    component = fixture.componentInstance;
    component.config = {} as any;
    component.characterData = { values: {} };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
