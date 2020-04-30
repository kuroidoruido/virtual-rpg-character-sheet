import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CthulhuV7FrClassiqueComponent, CthulhuV7FrClassiqueModule } from 'src/app/sheet/cthulhu-v7/fr-classique';
import { NainsEtJardinFrComponent, NainsEtJardinFrModule } from 'src/app/sheet/nains-et-jardin/fr';
import { FrV1BastetComponent, FrV1BastetModule } from 'src/app/sheet/cats-la-mascarade/fr-v1-bastet';
import { FrV1ChatComponent, FrV1ChatModule } from 'src/app/sheet/cats-la-mascarade/fr-v1-chat';
import { FrV1Chat2Component, FrV1Chat2Module } from 'src/app/sheet/cats-la-mascarade/fr-v1-chat2';
import { FrV1HumainComponent, FrV1HumainModule } from 'src/app/sheet/cats-la-mascarade/fr-v1-humain';

import { SheetSelectorPageComponent, SheetSelectorModule } from './sheet-selector';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: SheetSelectorPageComponent },
  
  // sheet pages
  { path: 'cthulhu-v7.fr-classique', component: CthulhuV7FrClassiqueComponent },
  { path: 'nains-et-jardins.fr', component: NainsEtJardinFrComponent },
  { path: 'cats-la-mascarade.fr-v1-bastet', component: FrV1BastetComponent },
  { path: 'cats-la-mascarade.fr-v1-chat', component: FrV1ChatComponent },
  { path: 'cats-la-mascarade.fr-v1-chat2', component: FrV1Chat2Component },
  { path: 'cats-la-mascarade.fr-v1-humain', component: FrV1HumainComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    
    SheetSelectorModule, 
    
    CthulhuV7FrClassiqueModule,
    NainsEtJardinFrModule,
    FrV1BastetModule,
    FrV1ChatModule,
    FrV1Chat2Module,
    FrV1HumainModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
