import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PlaceholderStylePipe } from '../placeholder-style/placeholder-style.pipe';
import { PlaceholderNumberInputComponent } from './placeholder-number-input.component';

describe('PlaceholderNumberInputComponent', () => {
  let component: PlaceholderNumberInputComponent;
  let fixture: ComponentFixture<PlaceholderNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderNumberInputComponent, PlaceholderStylePipe ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderNumberInputComponent);
    component = fixture.componentInstance;
    component.config = {} as any;
    component.characterData = { values: { characterName: '' } };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
