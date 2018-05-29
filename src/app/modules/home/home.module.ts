import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    Ng4GeoautocompleteModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
