import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollerButtonComponent } from './dice-roller-button.component';

describe('DiceRollerButtonComponent', () => {
  let component: DiceRollerButtonComponent;
  let fixture: ComponentFixture<DiceRollerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceRollerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
