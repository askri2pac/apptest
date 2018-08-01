import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechercheRoutingModule } from './recherche-routing.module';
import { RechercheComponent } from './recherche/recherche.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    RechercheRoutingModule,
    NgxSpinnerModule,
  ],
  declarations: [RechercheComponent]
})
export class RechercheModule { }
