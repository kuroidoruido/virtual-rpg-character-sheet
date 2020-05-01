import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { GAMES } from './games';
import { Game } from './model/game.model';

function sheetRoute(gameId: string, sheetId: string, moduleName: string): Route {
  return {
    path: `${gameId}.${sheetId}`,
    loadChildren: () => import(`./sheet/${gameId}/${sheetId}/${sheetId}.module`).then(mod => mod[moduleName]),
  };
}

function generateSheetPages(games: Game[]): Routes {
  const sheetRoutes = [];
  for(const game of games) {
    for(const sheet of game.sheets) {
      sheetRoutes.push(sheetRoute(game.gameId, sheet.sheetId, sheet.moduleName));
    }
  }
  return sheetRoutes;
}

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./sheet-selector/sheet-selector.module').then(mod => mod.SheetSelectorModule) },
  
  // sheet pages
  ...generateSheetPages(GAMES),
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
