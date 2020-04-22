import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceholderTextInputComponent } from './placeholder-text-input.component';

import { FormsModule } from '@angular/forms';

describe('PlaceholderTextInputComponent', () => {
  let component: PlaceholderTextInputComponent;
  let fixture: ComponentFixture<PlaceholderTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderTextInputComponent ],
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
