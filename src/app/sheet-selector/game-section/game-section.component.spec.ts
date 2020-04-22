import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

import { GameSectionComponent } from './game-section.component';

describe('GameSectionComponent', () => {
  let component: GameSectionComponent;
  let fixture: ComponentFixture<GameSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSectionComponent ],
      imports: [ RouterTestingModule, MatCardModule, MatChipsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSectionComponent);
    component = fixture.componentInstance;
    component.game = {gameId: 'id', gameName: 'name', sheets: []};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
