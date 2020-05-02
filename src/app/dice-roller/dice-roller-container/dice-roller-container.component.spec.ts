import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { DiceRollerContainerComponent } from './dice-roller-container.component';
import { DiceRollerComponent } from '../dice-roller/dice-roller.component';
import { DiceRollerButtonComponent } from '../dice-roller-button/dice-roller-button.component';

describe('DiceRollerContainerComponent', () => {
  let component: DiceRollerContainerComponent;
  let fixture: ComponentFixture<DiceRollerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceRollerContainerComponent, DiceRollerComponent, DiceRollerButtonComponent ],
      imports: [ NoopAnimationsModule, MatButtonModule, MatFormFieldModule, MatInputModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
