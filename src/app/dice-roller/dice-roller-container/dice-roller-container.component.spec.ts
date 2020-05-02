import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollerContainerComponent } from './dice-roller-container.component';

describe('DiceRollerContainerComponent', () => {
  let component: DiceRollerContainerComponent;
  let fixture: ComponentFixture<DiceRollerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceRollerContainerComponent ]
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
