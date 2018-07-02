import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    Ng4GeoautocompleteModule,
    NgxSmartModalModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
