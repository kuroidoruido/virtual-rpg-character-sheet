import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { PlaceholderStylePipe } from '../placeholder-style/placeholder-style.pipe';
import { PlaceholderCheckboxComponent } from './placeholder-checkbox.component';

describe('PlaceholderCheckboxComponent', () => {
  let component: PlaceholderCheckboxComponent;
  let fixture: ComponentFixture<PlaceholderCheckboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderCheckboxComponent, PlaceholderStylePipe ],
      imports: [ MatCheckboxModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderCheckboxComponent);
    component = fixture.componentInstance;
    component.config = {} as any;
    component.characterData = { values: { characterName: '' } };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
