import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSectionComponent } from './game-section.component';

describe('GameSectionComponent', () => {
  let component: GameSectionComponent;
  let fixture: ComponentFixture<GameSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
