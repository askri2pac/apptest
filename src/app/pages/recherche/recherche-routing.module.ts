import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RechercheComponent} from './recherche/recherche.component';

const routes: Routes = [
  {
    path: 'recherche',
    component: RechercheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechercheRoutingModule { }
