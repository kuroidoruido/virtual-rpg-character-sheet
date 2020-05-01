import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

function sheetRoute(gameId: string, sheetId: string, moduleName: string): Route {
  return {
    path: `${gameId}.${sheetId}`,
    loadChildren: () => import(`./sheet/${gameId}/${sheetId}/${sheetId}.module`).then(mod => mod[moduleName]),
  };
}

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./sheet-selector/sheet-selector.module').then(mod => mod.SheetSelectorModule) },
  
  // sheet pages
  sheetRoute('cats-la-mascarade', 'fr-v1-bastet', 'FrV1BastetModule'),
  sheetRoute('cats-la-mascarade', 'fr-v1-chat', 'FrV1ChatModule'),
  sheetRoute('cats-la-mascarade', 'fr-v1-chat2', 'FrV1Chat2Module'),
  sheetRoute('cats-la-mascarade', 'fr-v1-humain', 'FrV1HumainModule'),
  sheetRoute('cthulhu-v7', 'fr-classique', 'CthulhuV7FrClassiqueModule'),
  sheetRoute('nains-et-jardins', 'fr', 'NainsEtJardinFrModule'),
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
