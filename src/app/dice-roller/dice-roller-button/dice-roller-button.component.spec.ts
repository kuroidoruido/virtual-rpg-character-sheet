import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiceRollerButtonComponent } from './dice-roller-button.component';

describe('DiceRollerButtonComponent', () => {
  let component: DiceRollerButtonComponent;
  let fixture: ComponentFixture<DiceRollerButtonComponent>;

  beforeEach(waitForAsync(() => {
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
