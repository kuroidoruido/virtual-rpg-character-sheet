import { Component, Input } from '@angular/core';

import { GameWithUserInfos } from '../game.model';

@Component({
  selector: 'app-game-section',
  templateUrl: './game-section.component.html',
  styleUrls: ['./game-section.component.scss']
})
export class GameSectionComponent {
  @Input() game: GameWithUserInfos;
}
