import { Component, Input } from '@angular/core';

import { GameWithUserInfos } from 'src/app/model/game.model';

@Component({
  selector: 'app-game-section',
  templateUrl: './game-section.component.html',
  styleUrls: ['./game-section.component.scss']
})
export class GameSectionComponent {
  @Input() game: GameWithUserInfos;
}
