import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import {FormsModule} from '@angular/forms';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    Ng4GeoautocompleteModule,
    NgxSmartModalModule,
    FormsModule,
    GooglePlaceModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
