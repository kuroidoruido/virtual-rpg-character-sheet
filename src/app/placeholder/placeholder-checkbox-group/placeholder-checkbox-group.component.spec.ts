import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlaceholderStylePipe } from '../placeholder-style/placeholder-style.pipe';
import { PlaceholderCheckboxGroupComponent } from './placeholder-checkbox-group.component';

describe('PlaceholderCheckboxGroupComponent', () => {
  let component: PlaceholderCheckboxGroupComponent;
  let fixture: ComponentFixture<PlaceholderCheckboxGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderCheckboxGroupComponent, PlaceholderStylePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderCheckboxGroupComponent);
    component = fixture.componentInstance;
    component.config = {} as any;
    component.characterData = { values: { characterName: '' } };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
