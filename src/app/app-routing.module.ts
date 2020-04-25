import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CthulhuV7FrClassiqueComponent, CthulhuV7FrClassiqueModule } from 'src/app/sheet/cthulhu-v7/fr-classique';
import { SheetSelectorPageComponent, SheetSelectorModule } from './sheet-selector';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: SheetSelectorPageComponent },
  
  // sheet pages
  { path: 'cthulhu-v7.fr-classique', component: CthulhuV7FrClassiqueComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    
    SheetSelectorModule, 
    
    CthulhuV7FrClassiqueModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
