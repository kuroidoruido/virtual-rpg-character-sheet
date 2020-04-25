import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PlaceholderStylePipe } from '../placeholder-style/placeholder-style.pipe';
import { PlaceholderTextInputComponent } from './placeholder-text-input.component';

describe('PlaceholderTextInputComponent', () => {
  let component: PlaceholderTextInputComponent;
  let fixture: ComponentFixture<PlaceholderTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderTextInputComponent, PlaceholderStylePipe ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderTextInputComponent);
    component = fixture.componentInstance;
    component.config = {} as any;
    component.characterData = { values: { characterName: '' } };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
