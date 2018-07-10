import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechercheRoutingModule } from './recherche-routing.module';
import { RechercheComponent } from './recherche/recherche.component';

@NgModule({
  imports: [
    CommonModule,
    RechercheRoutingModule
  ],
  declarations: [RechercheComponent]
})
export class RechercheModule { }
