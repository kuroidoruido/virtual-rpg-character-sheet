import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PlaceholderStylePipe } from '../placeholder-style/placeholder-style.pipe';
import { ComputePipe } from './compute.pipe';
import { PlaceholderNumberComputedComponent } from './placeholder-number-computed.component';

describe('PlaceholderNumberComputedComponent', () => {
  let component: PlaceholderNumberComputedComponent;
  let fixture: ComponentFixture<PlaceholderNumberComputedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderNumberComputedComponent, ComputePipe, PlaceholderStylePipe ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderNumberComputedComponent);
    component = fixture.componentInstance;
    component.config = {} as any;
    component.characterData = { values: { characterName: '' } };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
